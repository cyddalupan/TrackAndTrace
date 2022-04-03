<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSoftdeletes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agents', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('applicant_statuses', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('casegens', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('category_keywords', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('chat_logs', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('countries', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('hitkeys', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('hitkey_severities', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('people', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('principals', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('replies', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('reports', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('report_categories', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('report_severities', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('unique_chats', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('urgencies', function (Blueprint $table) {
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
        //
    }
}
