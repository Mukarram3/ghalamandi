<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpenseVal extends Model
{
    use HasFactory;
    protected  $guarded = ['id'];
    protected $table = 'deal_types';

    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id');
    }
}
