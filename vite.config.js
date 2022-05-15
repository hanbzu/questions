import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/questions/", // https://vitejs.dev/guide/static-deploy.html#:~:text=to%20%27/%27.-,If%20you%20are%20deploying%20to,-https%3A//%3CUSERNAME%3E.github
});
