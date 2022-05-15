<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    public function subaccounts(){
        return $this->hasMany(SubAccount::class,'account_id');
    }
}
