import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        svgr({
            include: '**/*.svg?react',
        }),
    ],
    base: '/HomePage/',
    resolve: {
        alias: {
            '@': '/src',
            app: '/src/app',
            entities: '/src/entities',
            features: '/src/features',
            pages: '/src/pages',
            shared: '/src/shared',
            widgets: '/src/widgets',
        },
    },
    server: {
        port: 3000,
    },
})
