<?php

namespace App\Http\Controllers;

use App\FbUser;
use Illuminate\Http\Request;

class GetLocation extends Controller
{
    public function index($fb_id)
    {
        return view('get_location', ['url' => url('/'), 'fb_id' => $fb_id]);
        //return view('user.profile', ['user' => User::findOrFail($id)]);
    }

    public function save($fb_id, $long_id, $lat_id)
    {
        $user = FbUser::where('fb_id',$fb_id)->first();
        $user->long = $long_id;
        $user->lat = $lat_id;
        $user->save();

        return "<h1>Location Updated. Please Close.</h1>";
    }
}
