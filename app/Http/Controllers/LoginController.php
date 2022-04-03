<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Admin;
use App\ChatLog;

class LoginController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        $admin = Admin::where('username',$username)->first();
        if(isset($admin)){
            if(md5($password)."cyd" === $admin->password) {
                session_start();
                $_SESSION['admin_id'] = $admin->id;
                $_SESSION['admin_level'] = $admin->level;
                $_SESSION['agency_id'] = $admin->agency_id;
                return redirect('/');
            } else {
                return redirect('login')->with('message', 'Wrong Password');
            }
        } else {
            return redirect('login')->with('message', 'Wrong Username');
        }
    }

    public function logout()
    {
        session_start();
        session_destroy();
        return redirect('login');
    }

    public function fblogin()
    {
        echo 'Hello FB login';
    }
    
    public function noagency()
    {
        session_start();
        $_SESSION['notifications'] = ChatLog::where('created_at' ,'>=',date("Y-m-d", time() - 60 * 60 * 24))->get();
        $_SESSION['count'] = ChatLog::where('created_at' ,'>=',date("Y-m-d", time() - 60 * 60 * 24))->count();
        return view('noagency');
    }
    
    public function fbredirect($fb_id, $name, $email, $url)
    {
        session_start();
        
        $admin = Admin::where('fb_id',$fb_id)->first();
        if(isset($admin)){
            $_SESSION['admin_id'] = $admin->id;
            $_SESSION['admin_level'] = $admin->level;
            $_SESSION['agency_id'] = $admin->agency_id;
            return redirect('/');
        }else{
            $admin = new Admin;
            $admin->username = $name;
            $admin->password = "";
            $admin->level = 2;
            $admin->agency_id = 0;
            $admin->fb_id = $fb_id;
            $admin->name = $name;
            $admin->email = $email;
            $admin->save();
            
            $_SESSION['admin_id'] = $admin->id;
            $_SESSION['admin_level'] = $admin->level;
            $_SESSION['agency_id'] = $admin->agency_id;
            return redirect('/');
        }
    }
}
