<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Template extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    public function types()
    {
        return $this->hasMany(TemplateType::class, 'temp_id');
    }
    public function deals()
    {
        return $this->hasMany(Deal::class, 'expense_template');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
