import React from "react";
import { Illustrations } from "../../../assets";
import { LeftMenu as LeftMenuComponent } from "./LeftMenu";

export default {
  title: "Yabble/Atoms/LeftMenu",
  component: LeftMenuComponent,
  argTypes: {
    htmlFor: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <LeftMenuComponent {...args} />;

export const DefaultLeftMenu = Template.bind({});

DefaultLeftMenu.args = {
  logo: Illustrations.LogoWhite,
};
