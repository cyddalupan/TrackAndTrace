<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateChatlogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chat_logs', function (Blueprint $table) {
            $table->dropColumn(['person_id']);
        });

        Schema::table('chat_logs', function (Blueprint $table) {
            $table->bigInteger('fb_users_id')->nullable()->after('id');
            $table->bigInteger('fb_users_name')->nullable()->after('fb_users_id');
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
