<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBagInvoiceRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bag_invoice_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bag_invoice_id')->nullable();
            $table->string('bag_class')->nullable();
            $table->integer('qty')->nullable();
            $table->integer('no_of_bags')->nullable();
            $table->double('price')->nullable();
            $table->double('value')->nullable();
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
        Schema::dropIfExists('bag_invoice_records');
    }
}
