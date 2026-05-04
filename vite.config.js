import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CRESCENDO-FINALS-APPTECH/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
