<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateChatLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('chat_logs');
      
        Schema::create('chat_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('person_id');
            $table->string('user_message');
            $table->string('bot_message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
