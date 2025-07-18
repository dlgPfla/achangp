
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Netlify일 경우 보통 그대로 사용
  build: {
    outDir: 'dist' // ← 꼭 이렇게 되어 있어야 해요
  }
});
