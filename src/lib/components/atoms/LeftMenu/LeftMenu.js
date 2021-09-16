import React from "react";
import "./LeftMenu.scss";

const defaultOptions = [
  {
    name: "Surveys",
    onClick: () => {},
  },
  {
    name: "Hey Yabble",
    onClick: () => {},
  },
  {
    name: "MyPanel",
    onClick: () => {},
  },
];

const LeftMenu = ({
  options = defaultOptions,
  selectedIndex = 0,
  setSelectedIndex = () => {},
  logo,
}) => {
  const onClick = (index, action) => {
    setSelectedIndex(index);
    action();
  };
  return (
    <div className="left-menu">
      <div className="left-menu__header">
        {logo && (
          <img src={logo} alt="Hey Yabble Logo" className="left-menu__logo" />
        )}
      </div>
      <div className="left-menu__divider"></div>
      <div className="left-menu__content">
        {options.map((option, i) => (
          <div
            key={i}
            onClick={() => onClick(i, option.onClick)}
            className={`left-menu__button ${
              i === selectedIndex
                ? "left-menu__route--selected"
                : "left-menu__route"
            }`}
          >
            <div
              className={`left-menu__line ${
                i === selectedIndex && "left-menu__line--selected"
              }`}
            ></div>
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { LeftMenu };
