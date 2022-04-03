<?php

use App\Urgency;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUrgenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('urgencies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        $urgency = new Urgency;
        $urgency->name = "low";
        $urgency->save();
      
        $urgency2 = new Urgency;
        $urgency2->name = "medium";
        $urgency2->save();
      
        $urgency3 = new Urgency;
        $urgency3->name = "high";
        $urgency3->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('urgencies');
    }
}
