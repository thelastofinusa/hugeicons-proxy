import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/hugeicons.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
