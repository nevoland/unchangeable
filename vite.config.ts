import { resolve } from "path";

import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import moduleList from "vite-plugin-module-list";

export default defineConfig({
  plugins: [
    moduleList({
      mode: { extension: "js", language: "ts" },
      outputPath: resolve("lib/constants.ts"),
      rootPath: resolve("lib/constants"),
    }),
    moduleList({
      mode: { extension: "js", language: "ts" },
      outputPath: resolve("lib/tools.ts"),
      rootPath: resolve("lib/tools"),
    }),
    moduleList({
      mode: { extension: "js", language: "ts" },
      outputPath: resolve("src/components.ts"),
      rootPath: resolve("src/components"),
    }),
    preact(),
  ],
  clearScreen: false,
  build: {
    outDir: "dist/demo",
  },
});
