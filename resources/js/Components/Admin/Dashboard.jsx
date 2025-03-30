// resources/js/Components/Admin/Dashboard.jsx
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AdminDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Welcome, {auth.user.name}!</h1>
                            <p className="mb-4">You have administrator privileges.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Users</h3>
                                    <p>Manage all system users</p>
                                </div>
                                
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Classes</h3>
                                    <p>Manage class assignments</p>
                                </div>
                                
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">System Settings</h3>
                                    <p>Configure application settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}