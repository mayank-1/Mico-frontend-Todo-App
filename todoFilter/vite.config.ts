import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "taskFilter",
      filename: "remoteEntry.js",
      exposes: {
        "./TaskFilter": "./src/components/TaskFilter.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5176,
  },
});
