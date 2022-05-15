<?php

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Unit::insert([
            'name'=> 'Unit Name',
            'kgs'=> '12',
            'code'=> '001',
            'status'=> 'active',
        ]);
    }
}
