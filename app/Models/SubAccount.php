<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubAccount extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function account(){
        return $this->belongsTo(Account::class,'account_id');
    }

    public function children(){
        return $this->hasMany(SubAccount::class,'parent_id');
    }
    public function expenses(){
        return $this->hasMany(Expense::class,'account_id');
    }
}
