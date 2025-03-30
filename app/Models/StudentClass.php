<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class StudentClass extends User
{
    use HasFactory;

    protected $table = 'users';

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('student', function ($builder) {
            $builder->where('role', 'student');
        });
    }

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->attributes['role'] = 'student';
    }

    // Additional student-specific methods can be added here
    public function classSchedule()
    {
        return $this->studentClasses()->with('teacher');
    }

    public function gradeReport()
    {
        return $this->grades()->with('class');
    }
}