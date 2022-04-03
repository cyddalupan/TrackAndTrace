<?php

use App\ChatLog;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ChatLogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for ($i=0; $i < 100; $i++) { 
	        $data = new ChatLog;
	        $data->user_id = rand(1,20);
	        $data->user_message = Str::random(10);
	        $data->bot_message = Str::random(10);
	        $data->save();
    	}
    }
}