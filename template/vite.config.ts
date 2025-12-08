import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: { 
    alias: {
     '@app': '/src/app',
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@widgets': '/src/widgets',
      '@shared': '/src/shared',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@progress': '/src/progress',
    },
  },
})
