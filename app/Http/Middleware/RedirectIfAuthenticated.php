<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                $user = Auth::guard($guard)->user();

                // Prevent redirect loops by checking current route
                $currentRoute = $request->route()->getName();
                $targetRoute = $this->getTargetRoute($user->role);

                if ($currentRoute !== $targetRoute) {
                    return redirect()->route($targetRoute);
                }
            }
        }

        return $next($request);
    }

    /**
     * Get the target route based on user role
     */
    protected function getTargetRoute(string $role): string
    {
        return match ($role) {
            'admin' => 'admin.dashboard',
            'teacher' => 'teacher.dashboard',
            'student' => 'student.dashboard',
            default => 'home'
        };
    }
}