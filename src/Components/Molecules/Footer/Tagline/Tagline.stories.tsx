import Tagline from "./Tagline";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/Footer/Tagline",
  component: Tagline,
} as ComponentMeta<typeof Tagline>;

export const tagline: ComponentStory<typeof Tagline> = () => (
  <Tagline></Tagline>
);
