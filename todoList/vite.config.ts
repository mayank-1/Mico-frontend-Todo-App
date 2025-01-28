import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "taskList",
      filename: "remoteEntry.js",
      exposes: {
        "./TaskList": "./src/components/TaskList.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5177,
  },
});
