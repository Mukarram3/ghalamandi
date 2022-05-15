<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bag extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];
    public function commodities()
    {
        return $this->hasMany(Commodity::class, 'bag_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
