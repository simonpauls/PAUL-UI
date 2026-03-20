import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";
import "../src/theme.css";
import { BadgeContainer } from "../../packages/ui/src/utils/BadgeContainer";
import theme from "./theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <BadgeContainer />
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      theme: theme,
    },
  },

  tags: [],
};

export default preview;
