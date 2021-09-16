import React from "react";
import "./CompleteMenu.scss";
import { PrimaryHeader } from "../../atoms/PrimaryHeader/PrimaryHeader";
import { LeftMenu } from "../../atoms/LeftMenu/LeftMenu";

const CompleteMenu = ({
  children,
  setSelectedIndex,
  selectedIndex,
  options,
  menuLogo,
  headerLogo,
  ...rest
}) => {
  return (
    <div className="complete-menu">
      <div className="complete-menu__item-1">
        <LeftMenu
          {...{ setSelectedIndex, selectedIndex, options }}
          logo={menuLogo}
        />
      </div>
      <div className="complete-menu__item-2">
        <PrimaryHeader {...rest} logo={headerLogo} />
        <div className="complete-menu__content-box">
          <div className="complete-menu__content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { CompleteMenu };
