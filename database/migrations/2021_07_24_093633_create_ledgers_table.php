<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLedgersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ledgers', function (Blueprint $table) {
            $table->id();
            $table->text('desc')->nullable();
            $table->unsignedBigInteger('user_id')->nullable(); // Authenticated User ID
            $table->unsignedBigInteger('trx_id')->nullable();
            $table->unsignedBigInteger('account_id')->nullable(); // Sub Account ID
            $table->enum('type', ['Dr', 'Cr'])->nullable(); // Either Debit or Credit
            $table->double('debit')->nullable(); // if Debit Amount Should be there otherwise null
            $table->double('credit')->nullable(); // if Credit amount should be there otherwise null
            $table->double('balance')->nullable(); // last (balance+ debit) or (balance - credit) of this account
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
        Schema::dropIfExists('ledgers');
    }
}
