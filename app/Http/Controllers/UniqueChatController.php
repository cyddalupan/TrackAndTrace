<?php

namespace App\Http\Controllers;

use App\UniqueChat;
use Illuminate\Http\Request;

class UniqueChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(UniqueChat $uniqueChat)
    {
      return $uniqueChat::where('is_closed', 0)->first();
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
     * @param  \App\UniqueChat  $uniqueChat
     * @return \Illuminate\Http\Response
     */
    public function show(UniqueChat $uniqueChat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UniqueChat  $uniqueChat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UniqueChat $uniqueChat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UniqueChat  $uniqueChat
     * @return \Illuminate\Http\Response
     */
    public function destroy(UniqueChat $uniqueChat)
    {
        //
    }
}
