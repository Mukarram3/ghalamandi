<?php

namespace Database\Seeders;

use App\Models\Stock;
use Illuminate\Database\Seeder;

class StokSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Stock::insert([
            'lot_id'=> '1',
            'commodity_id'=> '1',
            'deal_id'=> '1',
            'unit_id'=> '1',
            'unit_kgs'=> '12',
            'rate'=> '12345',
            'qty'=> '20',
            'total_kg'=> '12',
            'total_amount'=> '123455',
            'total_stock_qty_kg'=> '12',
        ]);
    }
}
