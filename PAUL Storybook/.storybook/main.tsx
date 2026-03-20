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
        "@paul/ui": path.resolve(__dirname, "../../packages/ui/src/index.ts"),
        compositions: path.resolve(__dirname, "../../packages/ui/src/components/compositions"),
        data: path.resolve(__dirname, "../src/data"),
        hooks: path.resolve(__dirname, "../../packages/ui/src/hooks"),
        icons: path.resolve(__dirname, "../../packages/ui/src/icons"),
         images: path.resolve(__dirname, "../../packages/ui/src/images"),
         layout: path.resolve(__dirname, "../../packages/ui/src/components/layout"),
        primitives: path.resolve(__dirname, "../../packages/ui/src/components"),
        utils: path.resolve(__dirname, "../../packages/ui/src/utils"),
      };
    }

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
