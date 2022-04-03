<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('fb_id');
            $table->string('name');
            $table->string('username');
            $table->string('password');
            $table->string('contact');
            $table->string('address');
            $table->string('usertype');
            $table->date('birthday');
            $table->string('image');
            $table->bigInteger('country_id');
            $table->bigInteger('principal_id');
            $table->bigInteger('agent_id');
            $table->bigInteger('applicant_status_id');
            $table->bigInteger('bot_message_id');
            $table->string('passport_number');
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
        Schema::dropIfExists('applicants');
    }
}
