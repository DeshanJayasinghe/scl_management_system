import { Head } from '@inertiajs/react';

export default function AuthLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-gray-100">
                {children}
            </div>
        </>
    );
}