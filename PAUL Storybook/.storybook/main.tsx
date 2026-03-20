import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@paul/ui": path.resolve(import.meta.dirname, "../../packages/ui/src/index.ts"),
        compositions: path.resolve(import.meta.dirname, "../../packages/ui/src/components/compositions"),
        data: path.resolve(import.meta.dirname, "../src/data"),
        hooks: path.resolve(import.meta.dirname, "../../packages/ui/src/hooks"),
        icons: path.resolve(import.meta.dirname, "../../packages/ui/src/icons"),
         images: path.resolve(import.meta.dirname, "../../packages/ui/src/images"),
         layout: path.resolve(import.meta.dirname, "../../packages/ui/src/components/layout"),
        primitives: path.resolve(import.meta.dirname, "../../packages/ui/src/components"),
        utils: path.resolve(import.meta.dirname, "../../packages/ui/src/utils"),
      };
    }

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
