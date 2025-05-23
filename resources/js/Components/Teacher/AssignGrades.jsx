// resources/js/Components/Admin/Dashboard.jsx
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const AdminDashboard = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Admin Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Welcome to Admin Dashboard, {auth.user.name}!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

// Named export
export { AdminDashboard };

// OR if you prefer default export:
// export default AdminDashboard;