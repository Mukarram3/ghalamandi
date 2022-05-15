<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unit_stocks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('commodity_id')->nullable();
            $table->unsignedBigInteger('unit_id')->nullable();
            $table->integer('qty')->nullable();
            $table->integer('unit_kgs')->nullable();
            $table->double('amount')->nullable();
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
        Schema::dropIfExists('unit_stocks');
    }
}
