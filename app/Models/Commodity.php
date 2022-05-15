<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Commodity extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function category(){
        return $this->belongsTo(Category::class,'category_id');
    }
    public function parent(){
        return $this->belongsTo(ParentCommodity::class,'parent_id');
    }
    public function unit(){
        return $this->belongsTo(Unit::class,'unit_id');
    }
    public function dealCommodities(){
        return $this->hasMany(DealCommodity::class,'commodity_id');
    }
    public function stocks()
    {
        return $this->hasMany(Stock::class, 'commodity_id');
    }
    public function bag()
    {
        return $this->belongsTo(Bag::class, 'bag_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function account(){
        return $this->belongsTo(SubAccount::class,'account_id');
    }
}
