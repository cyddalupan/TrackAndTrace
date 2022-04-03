<?php

use App\ApplicantStatus;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ApplicantStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for ($i=0; $i < 20; $i++) { 
	        $data = new ApplicantStatus;
	        $data->name = Str::random(10);
	        $data->color = Str::random(10);
	        $data->save();
    	}
    }
}
