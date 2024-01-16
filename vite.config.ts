import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/react-pomodoro/",
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "pomodoro",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/remote",
      },

      shared: ["react", "react-dom", "styled-components", "recoil", "framer-motion"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
