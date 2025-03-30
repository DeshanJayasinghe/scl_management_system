<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Teacher relationship (classes they teach)
    public function teachingClasses()
    {
        return $this->hasMany(Classes::class, 'teacher_id');
    }

    // Student relationship (classes they attend)
    public function studentClasses()
    {
        return $this->belongsToMany(Classes::class, 'student_classes', 'student_id', 'class_id')
            ->using(StudentClass::class);
    }

    // Grades relationship
    public function grades()
    {
        return $this->hasMany(Grade::class, 'student_id');
    }

    // Role check methods
    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    public function isTeacher()
    {
        return $this->role === 'teacher';
    }

    public function isStudent()
    {
        return $this->role === 'student';
    }
}