<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Customer::insert([
            'name'=> 'Ali',
            'phone'=> '03150176888',
            'phone_2'=> '03150176880',
            'cinic'=> '3840388888888881',
            'desc'=> 'reguler',
            'company'=> 'Craveteck',
            'city'=> 'Sargodha',
            'address'=> 'GhalaMandi Sargodha',
            'balance'=> '10000',
        ]);
    }
}
