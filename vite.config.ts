import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Atorami.github.io/react-ts-shop/',
  plugins: [react()],
});
