<?php

use App\Applicant;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ApplicantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$usertype = ["super admin","admin","agent","applicant"];

    	for ($i=0; $i < 20; $i++) { 
	        $data = new Applicant;
	        $data->fb_id = rand(111111111,999999999);
	        $data->name = "name_".Str::random(10);
            $data->username = 'u_'.Str::random(10);
            $data->password = 'p_'.Str::random(10);
            $data->contact = rand(1111111,9999999);
            $data->address = 'address_'.Str::random(10);
            $data->usertype = $usertype[rand(0,3)];
            $data->birthday = rand(1980,2019)."-".rand(1,12)."-".rand(1,28);
            $data->image = "";
            $data->country_id = rand(1,20);
            $data->principal_id = rand(1,20);
            $data->agent_id = rand(1,20);
            $data->applicant_status_id = rand(1,20);
            $data->bot_message_id = rand(1,50);
            $data->passport_number = rand(11111111111,99999999999);
            $data->hire_date = rand(2000,2019)."-".rand(1,12)."-".rand(1,28);
            $data->deployed_date = rand(2000,2019)."-".rand(1,12)."-".rand(1,28);
	        $data->save();
    	}
    }
}
