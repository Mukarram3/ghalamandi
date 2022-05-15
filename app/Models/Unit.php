<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use HasFactory, SoftDeletes;

    public function deals()
    {
        return $this->hasMany(Deal::class, 'rate_unit');
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class, 'unit_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
