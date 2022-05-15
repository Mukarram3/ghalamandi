<?php

namespace Database\Seeders;

use App\Models\DealCommodity;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DealCommoditySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DealCommodity::insert([
            'deal_id'=> '1',
            'commodity_id'=> '1',
            'rate'=> '0.1',
            'unit_id'=> '1',
//            'unit_kgs'=> '12',
            'qty'=> '12',
//            'total_kgs'=> '12',
            'weight_after'=> '1',
//            'channi'=> '13',
            'total_amount'=> '20000',
            'total_amount_after'=> '20000',
//            'deleted_at'=> Carbon::now(),
        ]);
    }
}
