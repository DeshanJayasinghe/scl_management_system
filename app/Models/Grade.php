<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'class_id',
        'grade',
    ];

    // Student relationship
    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    // Class relationship
    public function class()
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }
}