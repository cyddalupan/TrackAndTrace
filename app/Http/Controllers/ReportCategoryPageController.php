<?php

namespace App\Http\Controllers;

use App\ReportCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReportCategoryPageController extends Controller
{
    private $pageurl = 'reportcategory';
    private $pageName = 'Report Category';

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

        $count = ReportCategory::count();
        $lastPage = ceil($count/$take);
        $datas = ReportCategory::orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('reportcategory', [
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
        return view('reportcategory_add',[
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
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = new ReportCategory;
        $data->name = $request->input('name');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ReportCategory  $reportCategory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  ReportCategory::find($id);

        return view('reportcategory_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ReportCategory  $reportCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ReportCategory $reportCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReportCategory  $reportCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = ReportCategory::find($id);
        $data->name = $request->input('name');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ReportCategory  $reportCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ReportCategory::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
