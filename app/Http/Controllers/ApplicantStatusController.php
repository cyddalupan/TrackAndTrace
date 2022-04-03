<?php

namespace App\Http\Controllers;

use App\ApplicantStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApplicantStatusController extends Controller
{
    private $pageurl = 'applicantstatus';
    private $pageName = 'Applicant Status';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
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

        $count = ApplicantStatus::count();
        $lastPage = ceil($count/$take);
        $datas = ApplicantStatus::orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('applicantstatus', [
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
        return view('applicantstatus_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
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
            'color' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = new ApplicantStatus;
        $data->name = $request->input('name');
        $data->color = $request->input('color');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ApplicantStatus  $applicantStatus
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  ApplicantStatus::find($id);

        return view('applicantstatus_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ApplicantStatus  $applicantStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(ApplicantStatus $applicantStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ApplicantStatus  $applicantStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'color' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = ApplicantStatus::find($id);
        $data->name = $request->input('name');
        $data->color = $request->input('color');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ApplicantStatus  $applicantStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ApplicantStatus::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
