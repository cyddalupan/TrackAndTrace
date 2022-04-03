<?php

use App\Report;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ReportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$urgency = ["high","medium","low"];
    	for ($i=0; $i < 200; $i++) { 
	        $data = new Report;
	        $data->user_id = rand(1,20);
	        $data->category = "category_".Str::random(10);
	        $data->sub_category = "sub_category_".Str::random(10);
	        $data->claimant = Str::random(10);
	        $data->urgency = $urgency[rand(0,2)];
	        $data->is_active = rand(0,1);
	        $data->remarks = Str::random(10)." ".Str::random(10)." ".Str::random(10)." ".Str::random(10);
	        $data->save();
    	}
    }
}
