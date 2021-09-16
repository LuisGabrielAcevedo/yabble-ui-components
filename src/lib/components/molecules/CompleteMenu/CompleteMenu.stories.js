import React from "react";
import { Illustrations } from "../../../assets";

import { CompleteMenu as CompleteMenuComponent } from "./CompleteMenu";

export default {
  title: "Yabble/Molecules/CompleteMenu",
  component: CompleteMenuComponent,
  argTypes: {
    btnType: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    logoTo: {
      table: {
        disable: true,
      },
    },
    handleLClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <CompleteMenuComponent {...args} />;

export const DefaultCompleteMenu = Template.bind({});
DefaultCompleteMenu.args = {
  headerLogo: Illustrations.LogoDark,
  menuLogo: Illustrations.LogoWhite,
};
