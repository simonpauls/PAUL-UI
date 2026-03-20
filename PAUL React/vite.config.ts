/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      include: ['src'],
      exclude: ['src/**/*.test.tsx', 'src/**/*.test.ts', 'src/setupTests.ts']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PaulReact',
      fileName: (format) => `paul-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy'
    }
  },
})
