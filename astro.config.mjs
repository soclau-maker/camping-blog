import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // Cho phép lắng nghe trên tất cả địa chỉ IP (cần cho ngrok)
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.ngrok-free.dev'],
    },
  },
});
