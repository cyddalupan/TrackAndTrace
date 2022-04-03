<?php

use App\Country;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for ($i=0; $i < 20; $i++) { 
	        $country = new Country;
	        $country->name = Str::random(10);
	        $country->save();
    	}
    }
}
