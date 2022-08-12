import React from "react";

import { MyButton } from "./MyButton";

export default {
  title: "components/MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const BasicTwo = (args) => <MyButton {...args} />;

BasicTwo.args = {
  text: "Hello World",
  color: "purple",
};