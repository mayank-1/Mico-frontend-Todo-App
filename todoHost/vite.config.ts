import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        taskInput: "http://localhost:5173/remoteEntry.js",
        taskList: "http://localhost:5177/remoteEntry.js",
        taskFilter: "http://localhost:5176/remoteEntry.js",
      },
    }),
  ],
  server: {
    port: 5174,
  },
});
