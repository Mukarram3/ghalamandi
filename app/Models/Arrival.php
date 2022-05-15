<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Arrival extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function deal(){
        return $this->belongsTo(Deal::class,'deal_id');
    }

    public function customer(){
        return $this->belongsTo(Customer::class,'customer_id');
    }

    public function types()
    {
        return $this->hasMany(ArrivalType::class, 'arrival_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
