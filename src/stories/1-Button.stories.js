import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Button",
  argTypes: {
    children: { control: "text" },
  },
};

const Template = ({ onClick, children }) => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = children;
  button.addEventListener("click", onClick);
  return button;
};

export const Text = Template.bind({});
Text.args = {
  children: "Button",
  onClick: action("onClick"),
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: "😀 😎 👍 💯",
};

export const TextWithAction = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "Trigger Action";
  button.addEventListener("click", () => action("This was clicked")());
  return button;
};

TextWithAction.storyName = "With an action";
TextWithAction.parameters = { notes: "My notes on a button with emojis" };

export const ButtonWithLinkToAnotherStory = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "Go to Welcome Story";
  button.addEventListener("click", linkTo("example-introduction--page"));
  return button;
};

ButtonWithLinkToAnotherStory.storyName = "button with link to another story";
