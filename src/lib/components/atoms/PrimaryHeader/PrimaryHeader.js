import React from "react";
import { Illustrations } from "../../../assets";
import "./PrimaryHeader.scss";
import arrowLeft from "../../../assets/icons/svg/arrow-left.svg";
import { Icon } from "../Icon/Icon";

const BackButton = ({ label, divider, backClickEvent }) => {
  return (
    <div className="primary-header-back" onClick={backClickEvent}>
      <div className="primary-header-back__icon">
        <Icon icon={arrowLeft} />
      </div>
      <span className="primary-header-back__text">{label}</span>
      {divider && <div className="primary-header-back__divider">/</div>}
    </div>
  );
};

const PrimaryHeader = ({
  title,
  backLabel,
  backClickEvent = () => {},
  logo,
  showLogoDivider,
  showBackDivider = true,
  leftComponent,
  centerComponent,
  rightComponent,
}) => {
  return (
    <div className="primary-header">
      <div className="primary-header__left-section">
        {title && !logo && (
          <span className="primary-header__title">{title}</span>
        )}
        {backLabel && (
          <BackButton
            label={backLabel}
            divider={showBackDivider}
            {...{ backClickEvent }}
          />
        )}
        {logo && (
          <img
            src={logo}
            alt="Hey Yabble Logo"
            className="primary-header__logo"
          />
        )}
        {showLogoDivider && (
          <div className="primary-header__logo-divider"></div>
        )}
        {leftComponent && leftComponent()}
      </div>
      <div className="primary-header__center-section">
        {centerComponent && centerComponent()}
      </div>
      <div className="primary-header__right-section">
        {rightComponent && rightComponent()}
      </div>
    </div>
  );
};

export { PrimaryHeader };
