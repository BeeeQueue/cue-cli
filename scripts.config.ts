import type { DenonConfig } from "./deps.ts";

const config: DenonConfig = {
  allow: {
    read: true,
  },
  unstable: true,

  scripts: {
    dev: {
      cmd: "deno run mod.ts",
      watch: false,
    },
  },
};

export default config;