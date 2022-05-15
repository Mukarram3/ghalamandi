<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Expense extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded =['id'];

    public function expense()
    {
        return $this->belongsTo(ExpenseHead::class, 'expense_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function account(){
        return $this->belongsTo(SubAccount::class,'account_id');
    }
}
