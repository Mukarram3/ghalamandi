<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

//    public function template()
//    {
//        return $this->belongsTo(Deal::class, 'expense_template');
//    }
//
//    public function unit()
//    {
//        return $this->belongsTo(Unit::class, 'rate_unit');
//    }
//    public function deal_commodities()d
//    {
//        return $this->hasMany(DealCommodity::class, 'deal_id');
//    }
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

//    public function stocks()
//    {
//        return $this->hasMany(Stock::class, 'deal_id');
//    }
}
