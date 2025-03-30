<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Public routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);

    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'store']);

    Route::get('/', function () {
        return view('welcome');
    })->name('welcome');
});


// Authenticated routes
Route::middleware('auth')->group(function () {
    // Logout
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin routes
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

        // User management
        Route::get('/users', [AdminController::class, 'index'])->name('admin.users.index');
        Route::get('/users/create', [AdminController::class, 'create'])->name('admin.users.create');
        Route::post('/users', [AdminController::class, 'store'])->name('admin.users.store');
        Route::get('/users/{user}/edit', [AdminController::class, 'edit'])->name('admin.users.edit');
        Route::put('/users/{user}', [AdminController::class, 'update'])->name('admin.users.update');
        Route::delete('/users/{user}', [AdminController::class, 'destroy'])->name('admin.users.destroy');

        // Class management
        Route::resource('classes', \App\Http\Controllers\Admin\ClassController::class);
    });

    // Teacher routes
    Route::middleware('role:teacher')->prefix('teacher')->group(function () {
        Route::get('/dashboard', [TeacherController::class, 'dashboard'])->name('teacher.dashboard');

        // Classes
        Route::get('/classes', [TeacherController::class, 'classes'])->name('teacher.classes');
        Route::get('/classes/{class}', [TeacherController::class, 'showClass'])->name('teacher.classes.show');

        // Grades
        Route::get('/grades/create', [TeacherController::class, 'createGrade'])->name('teacher.grades.create');
        Route::post('/grades', [TeacherController::class, 'storeGrade'])->name('teacher.grades.store');
        Route::get('/grades/{grade}/edit', [TeacherController::class, 'editGrade'])->name('teacher.grades.edit');
        Route::put('/grades/{grade}', [TeacherController::class, 'updateGrade'])->name('teacher.grades.update');
    });

    // Student routes
    Route::middleware('role:student')->prefix('student')->group(function () {
        Route::get('/dashboard', [StudentController::class, 'dashboard'])->name('student.dashboard');

        // Schedule
        Route::get('/schedule', [StudentController::class, 'schedule'])->name('student.schedule');

        // Grades
        Route::get('/grades', [StudentController::class, 'grades'])->name('student.grades');
    });

    // Fallback route for authenticated users
    Route::get('/home', function () {
        $user = auth()->user();
        return redirect()->route("{$user->role}.dashboard");
    })->name('home');
});

