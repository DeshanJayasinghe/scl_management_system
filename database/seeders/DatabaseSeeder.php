<?php

namespace Database\Seeders;

use App\Models\Classes;
use App\Models\Grade;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create admin
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@school.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        // Create teachers
        $teachers = User::factory()
            ->count(5)
            ->create(['role' => 'teacher']);

        // Create classes and assign to teachers
        $teachers->each(function ($teacher) {
            Classes::factory()
                ->count(3)
                ->create(['teacher_id' => $teacher->id]);
        });

        // Create students
        $students = User::factory()
            ->count(20)
            ->create(['role' => 'student']);

        // Assign students to classes
        $classes = Classes::all();
        $students->each(function ($student) use ($classes) {
            $student->studentClasses()->attach(
                $classes->random(rand(3, 5))->pluck('id')
            );
        });

        // Create grades
        Grade::factory()
            ->count(50)
            ->create();
    }
}