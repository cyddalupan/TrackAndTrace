<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\UserType;
use App\Country;
use App\Principal;
use App\Agent;
use App\ApplicantStatus;
use App\Admin;
use App\ReportCategory;
use App\ChatLog;

class PeopleController extends Controller
{
    private $pageurl = 'people';
    private $pageName = 'People';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $take = 20;

        // Get Sort
        $sort = 'created_at';
        if($request->input('sort')){
            $sort = $request->input('sort');
        }

        // Get order
        $order = 'desc';
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

        $count = Person::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Person::where('agency_id',$_SESSION['agency_id'])
                    ->with('usertype')
                    ->with('country')
                    ->with('principal')
                    ->with('agent')
                    ->with('applicantstatus')
                    ->with('encoder')
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();

        return view('people', [
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'datas' => $datas,
            'sort' => $sort,
            'order' => $order,
            'page' => $page,
            'lastPage' => $lastPage,
        ]);
    }

    public function connected(Request $request)
    {
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

        $count = Person::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Person::where('agency_id',$_SESSION['agency_id'])
                    ->with('usertype')
                    ->with('country')
                    ->with('principal')
                    ->with('agent')
                    ->with('applicantstatus')
                    ->with('encoder')
                    ->has('facebook')
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();

        return view('people', [
            'pageurl' => 'connectedpeople',
            'pageName' => $this->pageName,
            'datas' => $datas,
            'sort' => $sort,
            'order' => $order,
            'page' => $page,
            'lastPage' => $lastPage,
        ]);
    }

    public function notconnected(Request $request)
    {
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

        $count = Person::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Person::where('agency_id',$_SESSION['agency_id'])
                    ->with('usertype')
                    ->with('country')
                    ->with('principal')
                    ->with('agent')
                    ->with('applicantstatus')
                    ->with('encoder')
                    ->doesntHave('facebook')
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();

        return view('people', [
            'pageurl' => 'notconnectedpeople',
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
        $usertypes = UserType::all();
        $countries = Country::all();
        $principals = Principal::all();
        $agents = Agent::all();
        $applicantstatuses = ApplicantStatus::all();
        $admins = Admin::all();

        return view('people_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'usertypes' => $usertypes,
            'countries' => $countries,
            'principals' => $principals,
            'agents' => $agents,
            'applicantstatuses' => $applicantstatuses,
            'admins' => $admins,
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
            'name' => 'required|max:255',
            'contact' => 'required|max:255',
            'address' => 'required|max:255',
            'birthday' => 'required|date',
            'passport_number' => 'required|max:255',
            'photo' => 'required|image',
            'hire_date' => 'required|date',
            'deployed_date' => 'required|date',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = new Person;
        $data->agency_id = $_SESSION['agency_id'];
        $data->name = $request->input('name');
        $data->contact = $request->input('contact');
        $data->address = $request->input('address');
        $data->birthday = $request->input('birthday');
        $data->passport_number = $request->input('passport_number');
        if ($request->hasFile('photo')) {
            if ($request->file('photo')->isValid()) {
                $path = $request->photo->store('image');
                $data->image = $path;
            }
        }
        $data->usertype_id = $request->input('usertype_id');
        $data->country_id = $request->input('country_id');
        $data->principal_id = $request->input('principal_id');
        $data->agent_id = $request->input('agent_id');
        $data->applicant_status_id = $request->input('applicant_status_id');
        $data->hire_date = $request->input('hire_date');
        $data->deployed_date = $request->input('deployed_date');
        $data->encoder_id = $_SESSION['admin_id'];
        $data->save();
        
        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  Person::where('id',$id)->with('myreports')->with('facebook')->first();
        $reportCategories = ReportCategory::all();
        $categoryArr = [];
        foreach ($reportCategories as $category) {
            $categoryArr[$category->id] = $category->name;
        }

        $usertypes = UserType::all();
        $countries = Country::all();
        $principals = Principal::all();
        $agents = Agent::all();
        $applicantstatuses = ApplicantStatus::all();
        $admins = Admin::all();

        return view('people_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'usertypes' => $usertypes,
            'countries' => $countries,
            'principals' => $principals,
            'agents' => $agents,
            'applicantstatuses' => $applicantstatuses,
            'admins' => $admins,
            'categoryArr' => $categoryArr,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'contact' => 'required|max:255',
            'address' => 'required|max:255',
            'birthday' => 'required|date',
            'passport_number' => 'required|max:255',
            'hire_date' => 'required|date',
            'deployed_date' => 'required|date',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = Person::find($id);;
        $data->name = $request->input('name');
        $data->contact = $request->input('contact');
        $data->address = $request->input('address');
        $data->birthday = $request->input('birthday');
        $data->passport_number = $request->input('passport_number');
        if ($request->hasFile('photo')) {
            if ($request->file('photo')->isValid()) {
                $path = $request->photo->store('image');
                $data->image = $path;
            }
        }
        $data->usertype_id = $request->input('usertype_id');
        $data->country_id = $request->input('country_id');
        $data->principal_id = $request->input('principal_id');
        $data->agent_id = $request->input('agent_id');
        $data->applicant_status_id = $request->input('applicant_status_id');
        $data->hire_date = $request->input('hire_date');
        $data->deployed_date = $request->input('deployed_date');
        $data->encoder_id = $_SESSION['admin_id'];
        $data->save();
        
        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Person::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
