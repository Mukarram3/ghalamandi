<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('du_id')->nullable(); // Generate barcode on sale deal
            $table->unsignedBigInteger('invoice_id')->nullable();
            $table->unsignedBigInteger('customer_id')->nullable(); // Customer id on sale deal...Supplier Id on Purchase deal
            $table->unsignedBigInteger('broker_id')->nullable(); // Customer id on sale deal...Supplier Id on Purchase deal
            $table->double('brokerage')->nullable();

            $table->timestamp('delivery_date')->nullable();
            $table->enum('type',['Purchase','Sale'])->nullable();
            $table->double('vehicle_expense')->nullable();
            $table->double('local_vehicle_freight')->nullable();
            $table->string('vehicle_number')->nullable();
            $table->double('expense_amount')->nullable();
            $table->double('expense_percent')->nullable();
            $table->double('bag_weight')->nullable();
            $table->double('bag_price')->nullable();
            $table->double('total_expense')->nullable();

            $table->double('total_weight')->nullable();
            $table->text('barCode')->nullable();
            $table->enum('status',['loaded','pending','arrived','scanned','production','completed','removed']);

            $table->longText('expenses')->nullable();
            $table->text('desc')->nullable();
            $table->enum('deal_status',['Deal','Arrived','Loaded',
                'Scanned','Completed','Canceled','Deleted'])->nullable();

            $table->double('total_est_amount')->nullable();
            $table->double('total_vehicle_freight')->nullable();
            $table->unsignedBigInteger('gate_pass_id')->nullable(); // Ignore this
            $table->timestamp('check_in')->nullable();
            $table->timestamp('check_out')->nullable();
            $table->enum('payment_method',['Cash','Bank']);
            $table->unsignedBigInteger('bank_id')->nullable();
            $table->unsignedBigInteger('cash_tr_id')->nullable();


            $table->double('total_amount')->nullable();

            $table->timestamp('deal_date')->nullable();






            $table->double('original_weight_on_arrival')->nullable();
            $table->unsignedBigInteger('expense_template_id')->nullable();
            $table->enum('deal_type',['Arrival','Normal','Exmill'])->nullable();
            $table->double('weight_on_scale')->nullable(); // Weight


            $table->string('other_items')->nullable();
            $table->unsignedBigInteger('expense_template')->nullable();
            $table->softDeletes();
            $table->timestamps();

            // Note this deal has multiple commodities...
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deals');
    }
}
