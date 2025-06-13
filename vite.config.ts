import { defineConfig } from 'vite';
import path from 'node:path';

// Plugins
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import preserveDirectives from 'rollup-preserve-directives';


export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'react-free-transform',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
        sourcemap: true,
        emptyOutDir: true
    },
    plugins: [
        react(),
        dts({ // https://stackoverflow.com/a/78825198
            rollupTypes: true,
            tsconfigPath: "./tsconfig.app.json",
        }),
        preserveDirectives()
    ]
})
