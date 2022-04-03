<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHitkeySeveritiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hitkey_severities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('hitkey_id');
            $table->bigInteger('category_id');
            $table->tinyInteger('severity');
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
        Schema::dropIfExists('hitkey_severities');
    }
}
