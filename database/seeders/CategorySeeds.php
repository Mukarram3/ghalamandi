<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class CategorySeeds extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = new Category;
        $category->name= 'Maser';
        $category->code= '001';
        $category->save();

        $category = new Category;
        $category->name= 'Dal Mongy';
        $category->code= '002';
        $category->save();
    }
}
