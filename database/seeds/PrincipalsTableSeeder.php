<?php

use App\Principal;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class PrincipalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for ($i=0; $i < 20; $i++) { 
	        $data = new Principal;
	        $data->name = "NAME_".Str::random(10);
	        $data->contact = rand(1111111,9999999);
	        $data->address = rand(111,999)." ".Str::random(10)." City";
	        $data->email = Str::random(10).'@gmail.com';
	        $data->save();
    	}
    }
}
