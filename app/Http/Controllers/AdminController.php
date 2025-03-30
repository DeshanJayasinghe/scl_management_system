<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard', [
            // You can pass any additional data needed by your component here
            'auth' => [
                'user' => auth()->user()
            ],
            // Add other props if needed
        ]);
    }
}