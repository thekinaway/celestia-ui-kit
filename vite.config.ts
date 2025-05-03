import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'celestia-ui-kit',
      fileName: (format) => `celestia-ui-kit.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: '[name].[ext]',
      },
    }
  },
  plugins: [react(), 
    dts({
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      insertTypesEntry: true,
    })
  ],
})
