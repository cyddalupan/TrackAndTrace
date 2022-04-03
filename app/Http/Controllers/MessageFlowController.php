<?php

namespace App\Http\Controllers;

use App\Casegen;
use App\FbQuest;
use App\ReportCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageFlowController extends Controller
{
    private $pageurl = 'messageflow';
    private $pageName = 'Message Flow';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $take = 99999;

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

        $count = Casegen::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Casegen::where('agency_id',$_SESSION['agency_id'])->with('category')->with('quest')->orderBy($sort, $order)->get();

        return view('messageflow', [
            'pageurl' => $this->pageurl,
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
        $quests = FbQuest::where('agency_id',$_SESSION['agency_id'])->get();
        $categories = ReportCategory::all();

        return view('messageflow_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'categories' => $categories,
            'quests' => $quests,
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
            'message' => 'required|max:1500',
			//'image_url' => 'url|max:450',
            'option' => 'max:19',
            'option2' => 'max:19',
            'option3' => 'max:19',
            'option4' => 'max:19',
            'option5' => 'max:19',
            'option6' => 'max:19',
            'wrongid' => 'required|numeric',
            'subcategory' => 'max:255',
            'claimant' => 'max:255',
            'severity' => 'max:2',
            'remarks' => 'max:255',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }

        // Get rule
        $rule = $request->input('option').":".$request->input('quest');
        if(($request->input('option2') !== null) && ($request->input('quest2') !== null)){
            $rule = $rule.','.$request->input('option2').':'.$request->input('quest2');
        }
        if(($request->input('option3') !== null) && ($request->input('quest3') !== null)){
            $rule = $rule.','.$request->input('option3').':'.$request->input('quest3');
        }
        if(($request->input('option4') !== null) && ($request->input('quest4') !== null)){
            $rule = $rule.','.$request->input('option4').':'.$request->input('quest4');
        }
        if(($request->input('option5') !== null) && ($request->input('quest5') !== null)){
            $rule = $rule.','.$request->input('option5').':'.$request->input('quest5');
        }
        if(($request->input('option6') !== null) && ($request->input('quest6') !== null)){
            $rule = $rule.','.$request->input('option6').':'.$request->input('quest6');
        }

        //Convert inputs.
        $category = $request->input('category');
        $subcategory = $request->input('subcategory');
        $claimant = $request->input('claimant');
        $severity = $request->input('severity');
        $remarks = $request->input('remarks');

        $quest = new FbQuest;
        $quest->agency_id = $_SESSION['agency_id'];
        $quest->message = $request->message;
		//$quest->image_url = $request->input('image_url');
        $quest->rule = $rule;

        if($request->input('category')){
            $quest->correct_query = "INSERT INTO `reports`(`fb_id`, `agency_id`, `person_id`, `sub_category`, `claimant`, `is_active`, `remarks`,`report_category_id`, `updated_at`)  
                                        VALUES ('{{fb_id}}', ".$_SESSION['agency_id'].", 0, '{{message}}','none',1,'User is not ok.',$category,NOW())";

        }

        $quest->wrong_redirect_id = $request->input('wrongid');
        $quest->save();

        $data = new Casegen;
        $data->quest_id = $quest->id;
        $data->agency_id = $_SESSION['agency_id'];
        $data->report_category_id = $request->input('category');
        $data->subcategory = $request->input('subcategory');
        $data->claimant = $request->input('claimant');
        $data->severity = $request->input('severity');
        $data->remarks = $request->input('remarks');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function show(Casegen $casegen, $id)
    {
        $quests = FbQuest::where('agency_id',$_SESSION['agency_id'])->get();
        $current =  $casegen::find($id);
        $categories = ReportCategory::all();

        // Explode rules
        $ruleArray = [];
        $rule = $current->quest->rule;
        $ruleBlocks = explode(",", $rule);
        for ($i=0; $i < 6; $i++) {
            $readableRule = [];
            if(
                (count($ruleBlocks) > $i) &&
                (!is_null($ruleBlocks)) &&
                (!is_null($ruleBlocks[$i]))
            ){
                $ruleData = explode(":", $ruleBlocks[$i]);
                if(count($ruleData) === 2){
                    $readableRule['option'] = $ruleData[0];
                    $readableRule['quest'] = $ruleData[1];
                }else{
                    $readableRule['option'] = '';
                    $readableRule['quest'] = '';
                }
            }else{
                $readableRule['option'] = '';
                $readableRule['quest'] = '';
            }
            array_push($ruleArray,$readableRule);
        }


        return view('messageflow_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'rules' => $ruleArray,
            'categories' => $categories,
            'quests' => $quests,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function edit(Casegen $casegen)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Casegen $casegen, $id)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required|max:1500',
			//'image_url' => 'url|max:450',
            'option2' => 'max:19',
            'option3' => 'max:19',
            'option4' => 'max:19',
            'option5' => 'max:19',
            'option6' => 'max:19',
            'wrongid' => 'required|numeric',
            'subcategory' => 'max:255',
            'claimant' => 'max:255',
            'severity' => 'max:2',
            'remarks' => 'max:255',
        ]);
        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }

        // Get rule
        $rule = $request->input('option').":".$request->input('quest');
        if(($request->input('option2') !== null) && ($request->input('quest2') !== null)){
            $rule = $rule.','.$request->input('option2').':'.$request->input('quest2');
        }
        if(($request->input('option3') !== null) && ($request->input('quest3') !== null)){
            $rule = $rule.','.$request->input('option3').':'.$request->input('quest3');
        }
        if(($request->input('option4') !== null) && ($request->input('quest4') !== null)){
            $rule = $rule.','.$request->input('option4').':'.$request->input('quest4');
        }
        if(($request->input('option5') !== null) && ($request->input('quest5') !== null)){
            $rule = $rule.','.$request->input('option5').':'.$request->input('quest5');
        }
        if(($request->input('option6') !== null) && ($request->input('quest6') !== null)){
            $rule = $rule.','.$request->input('option6').':'.$request->input('quest6');
        }

        //Convert inputs.
        $category = $request->input('category');
        $subcategory = $request->input('subcategory');
        $claimant = $request->input('claimant');
        $severity = $request->input('severity');
        $remarks = $request->input('remarks');

        $data = Casegen::find($id);
        $data->report_category_id = $request->input('category');
        $data->subcategory = $request->input('subcategory');
        $data->claimant = $request->input('claimant');
        $data->severity = $request->input('severity');
        $data->remarks = $request->input('remarks');
        $data->save();

        $quest = FbQuest::find($data->quest_id);
        $quest->message = $request->message;
		//$quest->image_url = $request->input('image_url');
        $quest->rule = $rule;

        if($request->input('category')){
            $quest->correct_query = "INSERT INTO `reports`(`fb_id`, `agency_id`, `person_id`, `sub_category`, `claimant`, `is_active`, `remarks`,`report_category_id`, `updated_at`)
                                        VALUES ('{{fb_id}}', ".$_SESSION['agency_id'].", 0, '{{message}}','none',1,'User is not ok.',$category, NOW())";

        }

        $quest->wrong_redirect_id = $request->input('wrongid');
        $quest->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function destroy(Casegen $casegen, $id)
    {
        $casegen::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
