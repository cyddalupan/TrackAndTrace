<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PrimaryKeyForMerge extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('merge_reports', function (Blueprint $table) {
            $table->dropColumn('id');
        });

        Schema::table('merge_reports', function (Blueprint $table) {
            $table->bigIncrements('id');
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
