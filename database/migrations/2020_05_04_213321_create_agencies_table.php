<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agencies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('fb_access_token')->nullable();
            $table->string('fb_page_token')->nullable();
            $table->string('owner')->nullable();
            $table->string('status')->nullable();
            $table->text('remarks')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('admins', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('agents', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('casegens', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('people', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('principals', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('schedules', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('fb_quests', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });

        Schema::table('fb_users', function (Blueprint $table) {
            $table->bigInteger('agency_id')->after('id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agencies');
    }
}
