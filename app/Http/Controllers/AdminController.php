<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Agency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $take = 20;
        $pageurl = 'adminpage';

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

        $count = Admin::count();
        $lastPage = ceil($count/$take);
        $admins = Admin::orderBy($sort, $order)->skip($skip)->take($take)->get();

        return view('admin', [
            'pageurl' => $pageurl,
            'admins' => $admins,
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
        $agencies = Agency::all();
        return view('add', ['agencies' => $agencies]);
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
            'username' => 'required|unique:admins|max:255',
            'password' => 'required|max:80',
            'level' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }
        
        $admin = new Admin;
        $admin->agency_id = $request->input('agency_id');
        $admin->username = $request->input('username');
        $admin->password = md5($request->input('password'))."cyd";
        $admin->level = $request->input('level');
        $admin->save();
        
        return redirect('adminpage')->with('message', 'Admin Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin, $id)
    {
        $current =  $admin::find($id);
        $agencies = Agency::all();
        return view('single', ['current' => $current, 'agencies' => $agencies]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin $admin, $id)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:255',
            'level' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return back()->withErrors($validator);
        }

        $admin = $admin::find($id);
        $admin->agency_id = $request->input('agency_id');
        $admin->username = $request->input('username');
        if(null !== $request->input('password') ){
            $admin->password = md5($request->input('password'))."cyd";
        }
        $admin->level = $request->input('level');
        $admin->save();
        return back()->with('message', 'Admin Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin, $id)
    {
        $admin::destroy($id);
        return redirect('adminpage')->with('message', 'Admin Deleted');
    }
}
