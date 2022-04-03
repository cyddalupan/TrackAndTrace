<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCasegensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('casegens', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('quest_id');
            $table->bigInteger('category_id');
            $table->string('subcategory');
            $table->bigInteger('claimant_id');
            $table->bigInteger('urgency_id');
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
        Schema::dropIfExists('casegens');
    }
}
