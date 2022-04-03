<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPersonIdOnHitkey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hitkeys', function (Blueprint $table) {
            $table->bigInteger('fb_id')->after("id");
        });
      
        Schema::table('reports', function (Blueprint $table) {
            $table->bigInteger('fb_id')->after("id");
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
