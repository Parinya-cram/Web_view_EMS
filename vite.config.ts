import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// ❌ ลบ tailwindcss() และ autoprefixer() ออกไปให้หมด
// ✅ PostCSS จะจัดการส่วนนี้เองจากไฟล์ postcss.config.js

export default defineConfig({
  plugins: [react()],
});
