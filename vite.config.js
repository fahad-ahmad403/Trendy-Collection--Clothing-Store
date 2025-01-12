import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Trendy-Collection--Clothing-Store/",
  server: {
    host: true,
  },
});
