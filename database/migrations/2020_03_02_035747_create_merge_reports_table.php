<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMergeReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reports', function (Blueprint $table) {
            $table->bigInteger('merge_id')->after('is_active')->nullable();
            $table->boolean('is_tagged')->after('is_active')->nullable();
        });
      
        Schema::create('merge_reports', function (Blueprint $table) {
            $table->bigInteger('id');
            $table->string('person_name');
            $table->bigInteger('person_id');
            $table->string('categories_text');
            $table->string('subcategories_text');
            $table->string('claimant_text');
            $table->text('remarks');
            $table->text('chatlogs');
            $table->boolean('is_closed');
            $table->timestamps();
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
        Schema::dropIfExists('merge_reports');
    }
}
