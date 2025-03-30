<?php

namespace App\Http\Controllers;

use App\Models\Classes;
use App\Models\Grade;
use App\Models\User;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function dashboard()
    {
        $student = auth()->user();

        return Inertia::render('Student/Dashboard', [
            'schedule' => $student->studentClasses()->with('teacher')->get(),
            'grades' => $student->grades()->with('class')->get(),
        ]);
    }

    public function showSchedule()
    {
        $schedule = auth()->user()->studentClasses()->with('teacher')->get();

        return Inertia::render('Student/ClassSchedule', [
            'schedule' => $schedule,
        ]);
    }

    public function showGrades()
    {
        $grades = auth()->user()->grades()->with('class')->get();

        return Inertia::render('Student/ViewGrades', [
            'grades' => $grades,
        ]);
    }
}