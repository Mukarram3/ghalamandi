<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealCommoditiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deal_commodities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deal_id')->nullable();
            $table->unsignedBigInteger('commodity_id')->nullable();
            $table->double('rate')->nullable();
            $table->unsignedBigInteger('unit_id')->nullable();
            $table->unsignedBigInteger('rate_unit')->nullable();
            $table->unsignedBigInteger('weight_per_bag')->nullable();
            $table->double('qty')->nullable();
            $table->double('total_weight')->nullable();
            $table->double('total_weight_kgs')->nullable(); // in kg
            $table->double('weight_after')->nullable(); // in kg
            $table->double('deduction_weight')->nullable(); // in kg
            $table->double('deduction_amount')->nullable();
            $table->double('deduction_percent')->nullable();
            $table->double('total_deduction_weight')->nullable(); // in kg
            $table->double('total_deduction_amount')->nullable(); // in kg
            $table->double('total_expense_weight')->nullable(); // in kg
            $table->double('total_expense_amount')->nullable(); // in kg
            $table->double('total_amount')->nullable(); // total before checking
            $table->double('total_amount_after')->nullable(); // total after checking
            $table->softDeletes();
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
        Schema::dropIfExists('deal_commodities');
    }
}
