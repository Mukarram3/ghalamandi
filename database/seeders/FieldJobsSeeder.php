<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FieldJobsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('failed_jobs')->insert([
            'uuid'=> '1',
            'connection'=> 'Connection feildsssss',
            'queue'=> 'Dall,Maser',
            'payload'=> 'field payload',
            'exception'=> 'field exception',
            'failed_at'=> Carbon::now(),
        ]);
    }
}
