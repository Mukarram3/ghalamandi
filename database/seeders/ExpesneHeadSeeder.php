<?php

namespace Database\Seeders;

use App\Models\ExpenseHead;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ExpesneHeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ExpenseHead::insert([
            'name'=> 'Expense Head Name',
            'desc'=> 'Expense Head Description',
        ]);
    }
}
