<?php

namespace App\Http\Controllers;

use App\Report;
use App\MergeReport;
use App\ChatLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\FbUser;
use App\ReportCategory;
use App\Person;

class IssueController extends Controller
{
    private $pageurl = 'issue';
    private $pageName = 'Issue';

    public function mergeReport() {
        $reports = Report::where('agency_id',$_SESSION['agency_id'])
                    ->where('is_tagged',0)
                    ->orWhere('is_tagged',null)
                    ->get();

        $merges = MergeReport::where('agency_id',$_SESSION['agency_id'])
                    ->where('is_closed',0)
                    ->orWhere('is_closed',null)
                    ->get();

        $mergePersonIDs = [];
        foreach ($merges as $merge) {
            array_push($mergePersonIDs, $merge->person_id);
        }
        
        foreach ($reports as $report) {
            // Get person Name
            $personID = 0;
            $personName = '';
            if($report->person_id !== null){
                $personID = $report->person_id;
                $person = Person::find($report->person_id);
                if($person) $personName = $person->name;
            }

            // Get Category Name
            $categoryName = '';
            if($report->report_category_id !== null) {
                $category = ReportCategory::find($report->report_category_id);
                if($category) $categoryName = $category->name;
            }

            // Get person Name
            $personID = 0;
            $personName = '';
            if($report->person_id !== null){
                $personID = $report->person_id;
                $person = Person::find($report->person_id);
                if($person) $personName = $person->name;
            }

            // If Person ID Matches
            if(in_array($report->person_id, $mergePersonIDs)){
                $existingMerge = MergeReport::where('person_id',$report->person_id)->get();
                foreach ($existingMerge as $merge) {
                    //Get Chatlog String
                    $chatlogString = '';
                    if($report->fb_id !== null) {
                        $fbUser = FbUser::where('fb_id',$report->fb_id)->first();
                        if($fbUser){
                            // Get seven days before
                            $weekAgo = date('Y-m-d',(strtotime ( '-7 day' , strtotime ( $merge->created_at) ) ));
        
                            $chatlogs = ChatLog::where('fb_users_id',$fbUser->id)->where('created_at', '>=', $weekAgo)->get();
                            
                            foreach($chatlogs as $chatlog) {
                                $chatlogString = $chatlogString.'=br='.$chatlog->user_message.'=splt='.$chatlog->bot_message;
                            }
                        }

                        $merge->categories_text = $merge->categories_text.'=br='.$categoryName;
                        $merge->subcategories_text = $merge->subcategories_text.'=br='.$report->sub_category;
                        $merge->claimant_text = $merge->claimant_text.'=br='.$report->claimant;
                        $merge->remarks = $merge->remarks.'=br='.$report->remarks;
                        $merge->chatlogs = $chatlogString;
                        $merge->is_closed = 0;
                        $merge->save();
        
                        $report->merge_id = $merge->id;
                        $report->is_tagged = 1;
                        $report->save();
                    }
                }
            } else {
                //Get Chatlog String
                $chatlogString = '';
                if($report->fb_id !== null) {
                    $fbUser = FbUser::where('fb_id',$report->fb_id)->first();
                    if($fbUser){
                        // Get seven days before
                        $weekAgo = date('Y-m-d',(strtotime ( '-7 day' , strtotime ( $report->created_at) ) ));
    
                        $chatlogs = ChatLog::where('fb_users_id',$fbUser->id)->where('created_at', '>=', $weekAgo)->get();
                        
                        foreach($chatlogs as $chatlog) {
                            $chatlogString = $chatlogString.'=br='.$chatlog->user_message.'=splt='.$chatlog->bot_message;
                        }
                    }
                }

                $newMerge = new MergeReport;
                $newMerge->agency_id = $_SESSION['agency_id'];
                $newMerge->person_name = $personName;
                $newMerge->person_id = $personID;
                $newMerge->categories_text = $categoryName;
                $newMerge->subcategories_text = $report->sub_category;
                $newMerge->claimant_text = $report->claimant;
                $newMerge->remarks = $report->remarks;
                $newMerge->chatlogs = $chatlogString;
                $newMerge->is_closed = 0;
                $newMerge->save();

                $report->merge_id = $newMerge->id;
                $report->is_tagged = 1;
                $report->save();
            }
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->mergeReport();

        $take = 20;

        // Get Sort
        $sort = 'id';
        if($request->input('sort')){
            $sort = $request->input('sort');
        }

        // Get order
        $order = 'asc';
        if($request->input('order')){
            $order = $request->input('order');
        }

        // Get skip
        $page = 1;
        if($request->input('page')){
            $page = $request->input('page');
        }

        // Compute skip and take
        $skip = ($page-1)*$take;

        $count = MergeReport::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = MergeReport::where('agency_id',$_SESSION['agency_id'])
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('issue', [
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'datas' => $datas,
            'sort' => $sort,
            'order' => $order,
            'page' => $page,
            'lastPage' => $lastPage,
        ]);
    }

    public function openGroup(Request $request)
    {
        $this->mergeReport();

        $take = 20;

        // Get Sort
        $sort = 'id';
        if($request->input('sort')){
            $sort = $request->input('sort');
        }

        // Get order
        $order = 'asc';
        if($request->input('order')){
            $order = $request->input('order');
        }

        // Get skip
        $page = 1;
        if($request->input('page')){
            $page = $request->input('page');
        }

        // Compute skip and take
        $skip = ($page-1)*$take;

        $count = MergeReport::where('agency_id',$_SESSION['agency_id'])
                    ->where('agency_id',$_SESSION['agency_id'])
                    ->where('is_closed',0)
                    ->count();
        $lastPage = ceil($count/$take);
        $datas = MergeReport::where('agency_id',$_SESSION['agency_id'])
                    ->where('is_closed',0)
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('issue', [
            'pageurl' => 'open_group',
            'pageName' => $this->pageName,
            'datas' => $datas,
            'sort' => $sort,
            'order' => $order,
            'page' => $page,
            'lastPage' => $lastPage,
        ]);
    }

    public function closeGroup(Request $request)
    {
        $this->mergeReport();

        $take = 20;

        // Get Sort
        $sort = 'id';
        if($request->input('sort')){
            $sort = $request->input('sort');
        }

        // Get order
        $order = 'asc';
        if($request->input('order')){
            $order = $request->input('order');
        }

        // Get skip
        $page = 1;
        if($request->input('page')){
            $page = $request->input('page');
        }

        // Compute skip and take
        $skip = ($page-1)*$take;

        $count = MergeReport::where('agency_id',$_SESSION['agency_id'])
                    ->where('is_closed',1)
                    ->count();
        $lastPage = ceil($count/$take);
        $datas = MergeReport::where('agency_id',$_SESSION['agency_id'])
                    ->where('is_closed',1)
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('issue', [
            'pageurl' => 'close_group',
            'pageName' => $this->pageName,
            'datas' => $datas,
            'sort' => $sort,
            'order' => $order,
            'page' => $page,
            'lastPage' => $lastPage,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $fbusers = FbUser::all();
        $categories = ReportCategory::all();
        $people = Person::all();
      
        return view('issue_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'fbusers' => $fbusers,
            'categories' => $categories,
            'people' => $people,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'sub_category' => 'required|max:255',
            'claimant' => 'required|max:255',
            'severity' => 'required|numeric|max:9',
            'remarks' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = new Report;
        $data->agency_id = $_SESSION['agency_id'];
        $data->fb_id = $request->input('fb_id');
        $data->person_id = $request->input('person_id');
        $data->report_category_id = $request->input('report_category_id');
        $data->sub_category = $request->input('sub_category');
        $data->claimant = $request->input('claimant');
        $data->severity = $request->input('severity');
        $data->is_active = 1;
        $data->remarks = $request->input('remarks');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    public function group($id)
    {
        $this->mergeReport();

        $datas = Report::where('merge_id',$id)->get();
        $merge = MergeReport::find($id);
                    
        return view('issue_group', [
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'datas' => $datas,
            'merge' => $merge,
        ]);
    }

    public function groupOpen($id)
    {
        $merge = MergeReport::find($id);
        $merge->is_closed = 0;
        $merge->save();
        return back();
    }

    public function groupClose($id)
    {
        $merge = MergeReport::find($id);
        $merge->is_closed = 1;
        $merge->save();
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  Report::where('id',$id)->first();
        $fbusers = FbUser::all();
        $categories = ReportCategory::all();
        $people = Person::all();

        return view('issue_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'fbusers' =>$fbusers,
            'categories' =>$categories,
            'people' =>$people,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'sub_category' => 'required|max:255',
            'claimant' => 'required|max:255',
            'severity' => 'required|numeric|max:9',
            'remarks' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = Report::find($id);
        $data->agency_id = $_SESSION['agency_id'];
        $data->fb_id = $request->input('fb_id');
        $data->person_id = $request->input('person_id');
        $data->report_category_id = $request->input('report_category_id');
        $data->sub_category = $request->input('sub_category');
        $data->claimant = $request->input('claimant');
        $data->severity = $request->input('severity');
        $data->is_active = 1;
        $data->remarks = $request->input('remarks');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Report::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
