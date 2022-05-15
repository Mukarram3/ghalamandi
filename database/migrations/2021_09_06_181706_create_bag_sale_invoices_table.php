<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBagSaleInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bag_sale_invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sale_number')->nullable();
            $table->timestamp('sale_date')->nullable();
            $table->unsignedBigInteger('buyer_id')->nullable();
            $table->unsignedBigInteger('party_type_id')->nullable();
            $table->double('total_receivable')->nullable();
            $table->double('previous_credit')->nullable();
            $table->double('received_amount')->nullable();
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
        Schema::dropIfExists('bag_sale_invoices');
    }
}
