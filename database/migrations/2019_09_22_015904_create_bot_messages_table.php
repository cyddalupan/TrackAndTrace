<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBotMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bot_messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('message');
            $table->string('rule_reply');
            $table->string('update_rule');
            $table->string('create_rule');
            $table->string('custom_rule');
            $table->string('out_of_rule');
            $table->string('update_out');
            $table->string('create_out');
            $table->string('custom_out');
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
        Schema::dropIfExists('bot_messages');
    }
}
