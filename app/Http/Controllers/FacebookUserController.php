<?php

namespace App\Http\Controllers;

use App\FbUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FacebookUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $take = 20;
        $pageurl = 'facebookuser';

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

        $count = FbUser::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $fbusers = FbUser::where('agency_id',$_SESSION['agency_id'])->orderBy($sort, $order)->skip($skip)->take($take)->get();

        return view('all_facebookuser', [
            'pageurl' => $pageurl,
            'facebookusers' => $fbusers,
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
        return view('add_facebookuser');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FbUser  $fbUser
     * @return \Illuminate\Http\Response
     */
    public function show(FbUser $fbUser)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FbUser  $fbUser
     * @return \Illuminate\Http\Response
     */
    public function edit(FbUser $fbUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FbUser  $fbUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FbUser $fbUser,$id)
    {

        $data = $fbUser::find($id);
        $data->fb_quest_id = $request->input('fb_quest_id');
        $data->save();
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FbUser  $fbUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(FbUser $fbUser)
    {
        
    }
}
