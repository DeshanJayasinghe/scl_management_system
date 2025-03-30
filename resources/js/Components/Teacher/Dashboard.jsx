// resources/js/Components/Teacher/Dashboard.jsx
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function TeacherDashboard({ auth, classes }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
        >
            <Head title="Teacher Dashboard" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Welcome, {auth.user.name}!</h1>
                            <p className="mb-6">You are registered as a teacher.</p>
                            
                            <h2 className="text-xl font-semibold mb-4">Your Classes</h2>
                            {classes && classes.length > 0 ? (
                                <ul className="space-y-3">
                                    {classes.map((classItem) => (
                                        <li key={classItem.id} className="border-b pb-3">
                                            <Link 
                                                href={route('teacher.classes.show', classItem.id)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                {classItem.name}
                                            </Link>
                                            <span className="text-sm text-gray-600 block">
                                                Students: {classItem.students_count}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No classes assigned yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}