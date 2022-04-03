<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateBotMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('bot_messages');
      
        Schema::create('fb_quests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('message');
            $table->string('select',500);
            $table->string('rule');
            $table->string('correct_query',500);
            $table->bigInteger('wrong_redirect_id');
            $table->string('wrong,query',500);
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
