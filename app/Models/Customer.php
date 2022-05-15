<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function deals()
    {
        return $this->hasMany(Deal::class, 'customer_id');
    }

    public function arrivals()
    {
        return $this->hasMany(Arrival::class, 'customer_id');
    }
    public function type()
    {
        return $this->belongsTo(AccountType::class, 'account_type_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function account(){
        return $this->belongsTo(SubAccount::class,'account_id');
    }
}
