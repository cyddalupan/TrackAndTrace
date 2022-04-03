<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatePeople extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('people', function (Blueprint $table) {
            $table->timestamp('last_report_at',0)->after('deployed_date')->nullable();
            $table->double('longitude', 12, 12)->after('deployed_date')->nullable();
            $table->double('latitude', 12, 12)->after('deployed_date')->nullable();
            $table->boolean('is_connected')->after('deployed_date')->nullable();
            $table->bigInteger('encoder_id')->after('deployed_date')->nullable();
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
