<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'teacher_id',
    ];

    // Teacher relationship
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    // Students relationship
    public function students()
    {
        return $this->belongsToMany(User::class, 'student_classes', 'class_id', 'student_id')
            ->using(StudentClass::class);
    }

    // Grades relationship
    public function grades()
    {
        return $this->hasMany(Grade::class, 'class_id');
    }
}