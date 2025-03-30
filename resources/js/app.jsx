// resources/js/app.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import '../css/app.css';

// Import dashboard components
import AdminDashboard from './Components/Admin/Dashboard';
import TeacherDashboard from './Components/Teacher/Dashboard';
import StudentDashboard from './Components/Student/Dashboard';

createInertiaApp({
    resolve: name => {
        // Custom resolution for dashboard components
        if (name === 'Admin/Dashboard') return AdminDashboard;
        if (name === 'Teacher/Dashboard') return TeacherDashboard;
        if (name === 'Student/Dashboard') return StudentDashboard;
        
        // Default resolution for other pages
        return resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'));
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});