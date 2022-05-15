<?php

namespace Database\Seeders;

use App\Models\Commodity;
use App\Models\DealCommodity;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    public function run()
    {
        $this->call(AccountTableSeed::class);
        $this->call(CustomerSeeder::class);
        $this->call(CategorySeeds::class);
        $this->call(CommoditySeeder::class);
        $this->call(DealSeder::class);
        $this->call(DealCommoditySeeder::class);
        $this->call(DealExpensesSeeder::class);
        $this->call(DealTypesSeeder::class);
        $this->call(ExpensesSeeder::class);
        $this->call(ExpesneHeadSeeder::class);
        $this->call(LotsSeeder::class);
        $this->call(StokSeeder::class);
        $this->call(TemplateSeeder::class);
        $this->call(TemplateTypeSeeder::class);
        $this->call(UnitSeeder::class);

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'edit']);
        Permission::create(['name' => 'delete']);
        Permission::create(['name' => 'publish']);
        Permission::create(['name' => 'unpublish']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'manager']);
        $role1->givePermissionTo('edit');
        $role1->givePermissionTo('delete');

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('edit');
        $role2->givePermissionTo('delete');
        $role2->givePermissionTo('publish');
        $role2->givePermissionTo('unpublish');

//        $role3 = Role::create(['name' => 'super-admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create demo users

        $user = \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('123456'), // password
            'remember_token' => Str::random(10),
        ]);

        $user->assignRole($role2);

//        \App\Models\User::factory(10)->create();
    }
}
