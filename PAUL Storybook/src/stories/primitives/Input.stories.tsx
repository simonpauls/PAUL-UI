import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "primitives";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "PAUL Primitives/Inputs",
  
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const StoryInputField: Story = {
  name: "Input Field",
  args: {
    label: "I am a field",
    description: "I am a description",
    isDisabled: false,
    placeholder: "I am a placeholder",
    isRequired: false,
    type: "email",
  },
  render: (args) => <InputField {...args} />,
};
