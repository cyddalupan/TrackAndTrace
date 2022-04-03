<?php

namespace App\Http\Controllers;

use App\Reply;
use App\UniqueChat;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Close unique message.
        $unique = UniqueChat::find($request->unique_id);
        $unique->is_closed = true;
        $unique->save();

        //Save new reply
        $reply = new Reply;
        $reply->message = $request->message;
        $reply->reply = $request->reply;
        $reply->save();

        if(is_numeric($request->reply) || $request->reply === ""){
        return;
        }

        $returnObj = [
            'message' => "$request->reply",
            'rule' => "",
        ];

        app('App\Http\Controllers\ChatController')->update($unique->fb_id, $returnObj);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function show(Reply $reply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reply $reply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reply $reply)
    {
        //
    }
}
