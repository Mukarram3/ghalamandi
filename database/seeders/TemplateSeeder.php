<?php

namespace Database\Seeders;

use App\Models\Template;
use Illuminate\Database\Seeder;

class TemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Template::insert([
            'name'=> 'Template Name',
            'code'=> '001',
            'desc'=> 'Template Description',
            'type'=> 'sale',
        ]);
    }
}
