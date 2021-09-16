import React, { useState, useEffect } from "react";
import { SecondaryIconOnlyButton } from "../Buttons/Buttons";
import { PopupList } from "../PopupList/PopupList";
import "./Popup.scss";

const iconButtonStyle = { height: "32px", width: "32px" };
const iconStyles = { height: "20px", width: "20px" };

export const Popup = ({ icon, options = [], onSelect, component }) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => setVisible(!visible);

  const close = () => {
    if (visible) setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("click", close);
    return () => {
      window.removeEventListener("click", close);
    };
  });

  const ComponentToRender = component || SecondaryIconOnlyButton;

  return (
    <div className="popup">
      <ComponentToRender
        {...{ icon, onClick, iconStyles }}
        selected={visible}
        style={iconButtonStyle}
        className="popup__button"
        testId="popup-button"
      />
      {visible && <PopupList {...{ options, onSelect }} />}
    </div>
  );
};
