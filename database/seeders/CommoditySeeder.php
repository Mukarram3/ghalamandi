<?php

namespace Database\Seeders;

use App\Models\Commodity;
use Illuminate\Database\Seeder;

class CommoditySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Commodity::insert([
            'category_id'=> '1',
            'name'=> 'Maser light',
            'unit_id'=> '1',
            'kgs'=> '12',
            'code'=> '001',
            'bag_type'=> 'plastic',
            'status'=> 'active',
        ]);
    }
}
