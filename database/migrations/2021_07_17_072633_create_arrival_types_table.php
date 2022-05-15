<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArrivalTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('arrival_types', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('arrival_id');
            $table->unsignedBigInteger('deal_id');
            $table->unsignedBigInteger('customer_id');
            $table->string('commodity')->nullable();
            $table->integer('total_bags')->nullable();
            $table->string('driver_name')->nullable();
            $table->string('driver_phone')->nullable();
            $table->string('receiver_name')->nullable();
            $table->string('transporter_name')->nullable();
            $table->string('bilty_no')->nullable();
            $table->string('vehicle_no')->nullable();
            $table->string('load_weight')->nullable();
            $table->string('arrival_weight')->nullable();
            $table->double('vehicle_freight')->nullable();
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
        Schema::dropIfExists('arrival_types');
    }
}
