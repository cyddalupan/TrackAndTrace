<?php

namespace App\Http\Controllers;

use App\Agency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AgencyController extends Controller
{
    private $pageurl = 'agency';
    private $pageName = 'Agency';

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

        $count = Agency::count();
        $lastPage = ceil($count/$take);
        $datas = Agency::orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('agency', [
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
        return view('agency_add',[
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

        $data = new Agency;
        $data->name = $request->input('name');
        $data->fb_access_token = $request->input('fb_access_token');
        $data->fb_page_token = $request->input('fb_page_token');
        $data->owner = $request->input('owner');
        $data->status = $request->input('status');
        $data->remarks = $request->input('remarks');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Agency  $agency
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  Agency::find($id);

        return view('agency_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Agency  $agency
     * @return \Illuminate\Http\Response
     */
    public function edit(Agency $agency)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Agency  $agency
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

        $data = Agency::find($id);
        $data->name = $request->input('name');
        $data->fb_access_token = $request->input('fb_access_token');
        $data->fb_page_token = $request->input('fb_page_token');
        $data->owner = $request->input('owner');
        $data->status = $request->input('status');
        $data->remarks = $request->input('remarks');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Agency  $agency
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Agency::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
