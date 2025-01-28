import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "taskInput",
      filename: "remoteEntry.js",
      exposes: {
        "./TaskInput": "./src/components/TaskInput.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
  },
});
