<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateReplyRelatedTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('unique_chats', function (Blueprint $table) {
          $table->bigInteger('fb_id')->after('message');
      });
      
      Schema::table('casegens', function (Blueprint $table) {      
          $table->dropColumn('claimant_id');
          $table->renameColumn('category_id', 'report_category_id');
          $table->string('claimant')->after('subcategory');
          $table->string('remarks')->after('urgency_id');
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
