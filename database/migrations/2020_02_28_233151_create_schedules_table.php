<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('image');
            $table->string('message');
            $table->string('button_name_1');
            $table->string('button_link_1');
            $table->string('button_name_2');
            $table->string('button_link_2');
            $table->string('button_name_3');
            $table->string('button_link_3');
            $table->smallInteger('month');
            $table->smallInteger('year');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
