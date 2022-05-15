<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deal_expenses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deal_id')->nullable();
            $table->unsignedBigInteger('expense_id')->nullable();
            $table->enum('deduction_type',['dr','cr'])->nullable();
            $table->double('amount')->nullable();
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
        Schema::dropIfExists('deal_expenses');
    }
}
