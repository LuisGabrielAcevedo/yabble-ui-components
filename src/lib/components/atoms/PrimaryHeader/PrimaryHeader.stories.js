import React from "react";
import { Illustrations } from "../../../assets";
import { PrimaryHeader as PrimaryHeaderComponent } from "./PrimaryHeader";

export default {
  title: "Yabble/Atoms/PrimaryHeader",
  component: PrimaryHeaderComponent,
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

const Template = (args) => <PrimaryHeaderComponent {...args} />;

export const DefaultPrimaryHeader = Template.bind({});

DefaultPrimaryHeader.args = {
  logo: Illustrations.LogoDark,
  backLabel: "Back",
};
