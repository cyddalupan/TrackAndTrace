<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('reports');

        Schema::create('reports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('person_id');
            $table->string('category');
            $table->string('sub_category');
            $table->string('claimant');
            $table->bigInteger('urgency_id');
            $table->boolean('is_active');
            $table->string('remarks');
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
