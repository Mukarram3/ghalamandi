<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id');
    }

    public function commodity()
    {
        return $this->belongsTo(Commodity::class, 'commodity_id');
    }

    public function lot()
    {
        return $this->belongsTo(Lot::class, 'lot_id');
    }
}
