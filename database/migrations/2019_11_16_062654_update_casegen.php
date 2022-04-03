<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateCasegen extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reports', function (Blueprint $table) {
            $table->dropColumn('severity');
        });

        Schema::table('reports', function (Blueprint $table) {
            $table->tinyInteger('severity')->after('claimant')->nullable();
        });

        Schema::table('casegens', function (Blueprint $table) {
            $table->dropColumn('urgency_id');
        });
        
        Schema::table('casegens', function (Blueprint $table) {
            $table->tinyInteger('severity')->after('claimant')->nullable();
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
