<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLocationToFbUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fb_users', function (Blueprint $table) {
            $table->string('long',0)->after('last_chat_at')->nullable();
            $table->string('lat',0)->after('last_chat_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fb_user', function (Blueprint $table) {
            //
        });
    }
}
