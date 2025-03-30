// resources/js/Components/Student/Dashboard.jsx
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function StudentDashboard({ auth, schedule, grades }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student Dashboard</h2>}
        >
            <Head title="Student Dashboard" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Welcome, {auth.user.name}!</h1>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h2 className="text-xl font-semibold mb-4">Your Schedule</h2>
                                    {schedule && schedule.length > 0 ? (
                                        <ul className="space-y-2">
                                            {schedule.map((classItem) => (
                                                <li key={classItem.id} className="flex justify-between items-center">
                                                    <span>{classItem.name}</span>
                                                    <span className="text-sm text-gray-600">
                                                        Teacher: {classItem.teacher.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No classes scheduled yet.</p>
                                    )}
                                    <Link 
                                        href={route('student.schedule')}
                                        className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                                    >
                                        View full schedule →
                                    </Link>
                                </div>
                                
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h2 className="text-xl font-semibold mb-4">Your Grades</h2>
                                    {grades && grades.length > 0 ? (
                                        <ul className="space-y-2">
                                            {grades.map((grade) => (
                                                <li key={grade.id} className="flex justify-between items-center">
                                                    <span>{grade.class.name}</span>
                                                    <span className="font-bold">{grade.grade}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No grades recorded yet.</p>
                                    )}
                                    <Link 
                                        href={route('student.grades')}
                                        className="mt-4 inline-block text-green-600 hover:text-green-800"
                                    >
                                        View all grades →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}