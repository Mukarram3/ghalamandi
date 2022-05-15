<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DealDeduction extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id');
    }
    public function deduct()
    {
        return $this->belongsTo(Deduction::class, 'deduction_id');
    }
}
