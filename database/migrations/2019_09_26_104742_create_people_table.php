<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('persons');
      
        Schema::create('people', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('contact');
            $table->string('address');
            $table->date('birthday');
            $table->string('passport_number');
            $table->string('image');
            $table->bigInteger('usertype_id');
            $table->bigInteger('country_id');
            $table->bigInteger('principal_id');
            $table->bigInteger('agent_id');
            $table->bigInteger('applicant_status_id');
            $table->date('hire_date');
            $table->date('deployed_date');
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
        Schema::dropIfExists('people');
    }
}
