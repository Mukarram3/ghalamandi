<?php

namespace Database\Seeders;

use App\Models\Lot;
use Illuminate\Database\Seeder;

class LotsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lot::insert([
            'code'=> '001',
            'number'=> '12345667',
            'name'=> 'Dalls',
        ]);
    }
}
