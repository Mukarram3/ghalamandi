<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDealCommodities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('deal_commodities', function (Blueprint $table) {
//            $table->double('bardana')->nullable();
//            $table->double('kaat')->nullable();
//            $table->double('actual_weight')->nullable();
//            $table->double('note')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('deal_commodities', function (Blueprint $table) {
            //
        });
    }
}
