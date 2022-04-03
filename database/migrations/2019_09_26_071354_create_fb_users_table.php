<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFbUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fb_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fb_name');
            $table->bigInteger('fb_id');
            $table->bigInteger('fb_user_type_id');
            $table->bigInteger('fb_person_id');
            $table->bigInteger('fb_quest_id');
            $table->string('fb_variable');
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
        Schema::dropIfExists('fb_users');
    }
}
