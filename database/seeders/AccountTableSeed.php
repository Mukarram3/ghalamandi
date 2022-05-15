<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\SubAccount;
use Illuminate\Database\Seeder;

class AccountTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $account=new Account();
        $account->name='asset';
        $account->save();

        $account=new Account();
        $account->name='liability';
        $account->save();

        $account=new Account();
        $account->name='equity';
        $account->save();

        $account=new Account();
        $account->name='expense';
        $account->save();

        $account=new Account();
        $account->name='income';
        $account->save();

        $asset=Account::where('name','asset')->first();
        $subAccount=new SubAccount();
        $subAccount->name='Current Asset';
        $subAccount->account_id=$asset->id;
        $subAccount->save();

        $subAccount=new SubAccount();
        $subAccount->name='Non Current Asset';
        $subAccount->account_id=$asset->id;
        $subAccount->save();

        $liability=Account::where('name','liability')->first();

        $subAccount=new SubAccount();
        $subAccount->name='Current liability';
        $subAccount->account_id=$liability->id;
        $subAccount->save();

        $subAccount=new SubAccount();
        $subAccount->name='Non Current liability';
        $subAccount->account_id=$liability->id;
        $subAccount->save();

    }
}
