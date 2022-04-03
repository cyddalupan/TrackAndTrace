<?php

use App\FbUser;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Web Pages
Route::get('login','LoginController@index');
Route::get('noagency','LoginController@noagency');
Route::get('login/fbredirect/{fb_id}/{name}/{email}/{url}','LoginController@fbredirect');
Route::post('login/login','LoginController@login');
Route::get('logout','LoginController@logout');
Route::get('fblogin','LoginController@fblogin');

Route::get('/','DashboardController@index')->middleware('logged');
Route::resource('adminpage', 'AdminController')->middleware('logged');
Route::resource('facebookuser', 'FacebookUserController')->middleware('logged');
Route::resource('messageflow', 'MessageFlowController')->middleware('logged');
Route::resource('people', 'PeopleController')->middleware('logged');
Route::get('connectedpeople','PeopleController@connected')->middleware('logged');
Route::get('notconnectedpeople','PeopleController@notconnected')->middleware('logged');
Route::resource('issue', 'IssueController')->middleware('logged');
Route::get('open_group/', 'IssueController@openGroup')->middleware('logged');
Route::get('close_group/', 'IssueController@closeGroup')->middleware('logged');
Route::get('group_issue/{id}', 'IssueController@group')->middleware('logged');
Route::get('group_issue/open/{id}', 'IssueController@groupOpen')->middleware('logged');
Route::get('group_issue/close/{id}', 'IssueController@groupClose')->middleware('logged');
//Route::get('merge','IssueController@mergeReport')->middleware('logged');
Route::resource('applicantstatus', 'ApplicantStatusController')->middleware('logged');
Route::resource('agent', 'AgentController')->middleware('logged');
Route::resource('agency', 'AgencyController')->middleware('logged');
Route::resource('country', 'CountryController')->middleware('logged');
Route::resource('principal', 'PrincipalController')->middleware('logged');
Route::resource('principal', 'PrincipalController')->middleware('logged');
Route::resource('reportcategory', 'ReportCategoryPageController')->middleware('logged');
Route::resource('schedule', 'ScheduleController')->middleware('logged');
Route::get('schedule_send/{id}', 'ScheduleController@sendchat')->middleware('logged');

// Update user location
Route::get('get_location/{fb_id}', 'GetLocation@index');
// Update user location
Route::get('updateloc/{fb_id}/{long_id}/{lat_id}', 'GetLocation@save');

// Facebook Messager
Route::get('cyddb', function () {
  $tables = DB::select('SHOW TABLES');
  foreach ($tables as $table) {
    foreach ($table as $key => $value) {
      echo "<br><br>## ".$value."<br>";
      echo json_encode(DB::getSchemaBuilder()->getColumnListing($value));
    }
  }
});

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

$router->get('chat_test/{fb_id}/{message}', 'ChatController@test_chat');
Route::get('template_test','ChatController@updateTemplate');

$router->post('hello', 'ChatController@hello');
$router->get('hello', 'ChatController@hello');

$router->post('update', 'ChatController@update');
$router->get('update', 'ChatController@update');

Route::get('/privacy', function () {
    echo "Updated privacy will be avaiable tomorrow.";
});

Route::any('/upload-csv', 'CsvController@upload');

Route::get('/get-profile/{token}', function ($token) {
    
    // Steps to update users
    // go to https://developers.facebook.com/tools/explorer/
    // select facebook page
    // Get access token 
    // Update access token. if not working try updating app secret also.
    
    $fb = new Facebook\Facebook([
      'app_id' => '505850150240934',
      'app_secret' => '28751d2e3a29975bf78a4ebded84a7e6',
      'default_graph_version' => 'v5.0',
      ]);
    
    $fbUsers = FbUser::where('img',null)->get();
    
    foreach ($fbUsers as $fbuser) {
        try {
            // Returns a `Facebook\FacebookResponse` object
            $response = $fb->get('/'.$fbuser->fb_id.'?fields=id,name,profile_pic', $token);
            
            $user = $response->getGraphUser();
            
            $fbuser->fb_name = $user['name'];
            $fbuser->img = $user['profile_pic'];
            $fbuser->save();

        } catch(Facebook\Exceptions\FacebookResponseException $e) {
            $fbuser->img = 'failed';
            $fbuser->save();
        } catch(Facebook\Exceptions\FacebookSDKException $e) {
            $fbuser->img = 'failed';
            $fbuser->save();
        }  
        sleep(10);
    }
    
    return '<br><br><br><br><center><h1>sync done</h1></center>';
    
});

Route::get('/looptest', function () {
    date_default_timezone_set("Asia/Manila");

    
    echo "<br> YEMON:".date("ym");
    
    // Get all user that is active in facebook.
    $all_user = FbUser::whereNotNull('fb_person_id')->with('people')->get();
    
    // Loop all users.
    foreach ($all_user as $user) {
        
        // Ignore user with quest number 10
        if (isset($user->fb_quest_id) && ($user->fb_quest_id == 10)) {
            continue;
        }
        
        // Check if connected to a peson.
        if(isset($user->people->deployed_date)){
            // Get day number of the users deployed date.
            $deployed_date = $user->people->deployed_date;
            $datetime = new \DateTime($deployed_date);
            $yrMn = $datetime->format('ym');
            
            
            echo "<br> deployed:".$yrMn;
        }
    }
});
