import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        compositions: path.resolve(import.meta.dirname, "../src/ui/compositions"),
        hooks: path.resolve(import.meta.dirname, "../src/ui/hooks"),
        icons: path.resolve(import.meta.dirname, "../src/ui/icons"),
        images: path.resolve(import.meta.dirname, "../src/ui/images"),
        layout: path.resolve(import.meta.dirname, "../src/ui/layout"),
        primitives: path.resolve(import.meta.dirname, "../src/ui/primitives"),
        providers: path.resolve(import.meta.dirname, "../src/ui/providers"),
        utils: path.resolve(import.meta.dirname, "../src/ui/utils"),
      };
    }

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
