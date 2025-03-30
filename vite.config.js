import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', // For Tailwind CSS
                'resources/js/app.jsx',  // Main JS entry point
            ],
            refresh: [
                'resources/js/Components/**', // Watch Components directory
                'resources/js/Pages/**',      // Watch Pages directory
                'resources/views/**/*.blade.php', // Watch Blade templates
                'resources/css/app.css',       // Watch CSS changes
            ],
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js', // Create alias for easier imports
        },
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            '@inertiajs/react',
            'resources/js/Components/Admin/Dashboard.jsx', // Explicitly include
        ],
    },
});