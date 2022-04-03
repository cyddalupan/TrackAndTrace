<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameChatIdInHitkey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hitkeys', function (Blueprint $table) {
          $table->dropColumn(['chat_id']);
          $table->bigInteger('unique_chat_id')->after('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('hitkey', function (Blueprint $table) {
            //
        });
    }
}
