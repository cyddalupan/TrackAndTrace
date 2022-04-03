<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

use App\FbUser;
use App\Schedule as AppSchedule;
use App\Http\Controllers\ChatController;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Are you ok message monthly.
        $schedule->call(function () {  
            date_default_timezone_set("Asia/Manila");
        
            // Gets the day number.
            $today_day  = date('d',mktime(0, 0, 0, date("m")  , date("d"), date("Y")));
            
            // Get all user that is active in facebook.
            $all_user = FbUser::whereNotNull('fb_person_id')->with('people')->get();
            
            // Loop all users.
            foreach ($all_user as $user) {
                
                // Ignore user with quest number 10
                if (isset($user->fb_quest_id) && ($user->fb_quest_id == 10)) {
                    continue;
                }
                
                if(isset($user->people->deployed_date)){
                    // Get day number of the users deployed date.
                    $deployed_date = $user->people->deployed_date;
                    $datetime = new \DateTime($deployed_date);
                    $deployed_day = $datetime->format('d');
                    
                    $yrMn = $datetime->format('ym');
                    if($yrMn === date("ym")) {
                        continue;
                    }
                    
                    // Check if deployed day is equal to today plus 2 days.
                    if($deployed_day == $today_day){
                        // Change the quest of the user to are you ok quest.
                        $user->fb_quest_id = 9;
                        $user->save();
                        $returnObj = [
                          'message' => "Are you ok?",
                          'rule' => "yes:8,no:10",
                        ];
                        
                        // Trigger the send message.
                        app('App\Http\Controllers\ChatController')->update($user->fb_id, $returnObj);
                        sleep(10);
                    }
                }
            }
        })->daily()->timezone('Asia/Manila');
      
        // Did you get salary message every month.
        $schedule->call(function () {
            date_default_timezone_set("Asia/Manila");
        
            // Gets the day number plus 2 days.
            $two_days  = date('d',mktime(0, 0, 0, date("m")  , date("d")-2, date("Y")));
            
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
                    $deployed_day = $datetime->format('d');
                    
                    $yrMn = $datetime->format('ym');
                    if($yrMn === date("ym")) {
                        continue;
                    }
                    
                    // Check if deployed day is equal to today plus 2 days.
                    if($deployed_day == $two_days){
                        // Change the quest of the user to salary quest.
                        $user->fb_quest_id = 24;
                        $user->save();
                        $returnObj = [
                          'message' => "Did you received your salary this month?",
                          'rule' => "Yes:25,No:26",
                        ];
                        
                        // Trigger the send message.
                        app('App\Http\Controllers\ChatController')->update($user->fb_id, $returnObj); 
                        sleep(10);
                    }
                }
            }
        })->daily()->timezone('Asia/Manila');
      
        // Custom message that sends monthly.
        $schedule->call(function () {
            date_default_timezone_set("Asia/Manila");
            
            $currentMonth = Date('n');
            $currentYear = Date('Y');
            $schedules = AppSchedule::where('month',$currentMonth)->where('year',$currentYear)->get();
            // Get all user that is active in facebook.
            $all_user = FbUser::whereNotNull('fb_person_id')->with('people')->get();

            // Loop current schedules.
            foreach ($schedules as $sched) {
              // Loop all users.
              foreach ($all_user as $user) {
                  // Extra code for testing to my (cyd) messanger only
//                   if ($user->fb_id !== '2992672684099120') {
//                       continue;
//                   }

                  // Ignore user with quest number 10
                  if (isset($user->fb_quest_id) && ($user->fb_quest_id == 10)) {
                      continue;
                  }
                
                  $dynaLink1 = str_replace("{{fb_id}}",$user->fb_id ,$sched->button_link_1);

                  // Trigger the send message.
                  app('App\Http\Controllers\ChatController')->updateTemplate(
                    $user->fb_id,
                    $sched->title,
                    url('/').'./../storage/app/'.$sched->image,
                    $sched->message,
                    $sched->button_name_1,
                    $dynaLink1,
                    $sched->button_name_2,
                    $sched->button_link_2,
                    $sched->button_name_3,
                    $sched->button_link_3);
                
                // Adds 2 minutes delay per send.
                sleep(120);
              }
           }
        })->monthly()->timezone('Asia/Manila'); //everyMinute daily
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
