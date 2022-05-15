<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Deal extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    public function templates()
    {
        return $this->hasMany(DealExpense::class, 'deal_id');
    }
    public function deductions()
    {
        return$this->hasMany(DealDeduction::class, 'deal_id');
    }
    public function unit()
    {
        return $this->belongsTo(Unit::class, 'rate_unit');
    }
    public function deal_commodities()
    {
        return $this->hasMany(DealCommodity::class, 'deal_id');
    }

    public function arrivals()
    {
        return $this->hasMany(ArrivalType::class, 'deal_id');
    }
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
