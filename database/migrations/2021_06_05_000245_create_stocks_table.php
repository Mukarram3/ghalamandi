<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            // Note You have to check commodity_id lot_id and unit_id if found then insert row and update stock based on previous data by where clause
            $table->id();
            $table->unsignedBigInteger('lot_id')->nullable();
            $table->unsignedBigInteger('commodity_id')->nullable();
            $table->unsignedBigInteger('deal_id')->nullable(); // On Which Deal it is updated
            $table->unsignedBigInteger('unit_id')->nullable();
            $table->double('unit_kgs')->nullable();
            $table->double('rate')->nullable();
            $table->double('qty')->nullable();
            $table->double('total_kg')->nullable();
            $table->double('total_amount')->nullable();
            $table->double('total_stock_qty_kg')->nullable();
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
        Schema::dropIfExists('stocks');
    }
}
