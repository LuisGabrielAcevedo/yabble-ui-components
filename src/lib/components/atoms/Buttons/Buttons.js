import React, { useCallback } from "react";
import { formatClassName } from "../../../utils";
import { DotsLoading } from "../DotsLoading/DotsLoading";
import { Icon } from "../Icon/Icon";
import "./Buttons.scss";

export const PrimaryButtonRectangle = ({
  label = "label",
  isLoading,
  leftIcon,
  disabled,
  className,
  ...props
}) => {
  const iconStyles = { marginRight: 8 };
  const getClassName = useCallback(() => {
    return formatClassName(className, [
      [isLoading, "button--primary--loading"],
    ]);
  }, [isLoading]);
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--primary__icon--disabled"]]);
  }, [disabled]);

  return (
    <button
      className={`button button--primary ${getClassName()}`}
      {...{ disabled }}
      {...props}
    >
      {leftIcon && (
        <Icon
          {...{ disabled }}
          icon={leftIcon}
          style={
            !disabled ? iconStyles : { ...iconStyles, pointerEvents: "none" }
          }
          className={`button--primary__icon ${getIconClassName()}`}
        />
      )}
      {isLoading ? <DotsLoading /> : label}
    </button>
  );
};

export const PrimaryButtonRound = ({ label = "label", disabled, ...props }) => {
  return (
    <button
      className="button button--primary button--round"
      {...{ disabled }}
      {...props}
    >
      {label}
    </button>
  );
};

export const SecondaryButtonRectangle = ({
  label = "label",
  disabled,
  isLoading,
  className,
  ...props
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [
      [isLoading, "button--secondary--loading"],
    ]);
  }, [isLoading]);
  return (
    <button
      className={`button button--secondary ${getClassName()}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <DotsLoading color="#0D47BB" /> : label}
    </button>
  );
};

export const SecondaryButtonRound = ({
  label = "label",
  disabled,
  ...props
}) => {
  return (
    <button
      className="button button--secondary button--round"
      {...{ disabled }}
      {...props}
    >
      {label}
    </button>
  );
};

export const SubtleButton = ({ label = "label", disabled, ...props }) => {
  return (
    <button className="button button--subtle" {...{ disabled }} {...props}>
      {label}
    </button>
  );
};

export const SubtleIconOnlyButton = ({
  disabled,
  icon,
  iconStyles = {},
  testId,
  className,
  ...props
}) => {
  const getIconClassName = useCallback(() => {
    return formatClassName("", [
      [disabled, "button--subtle-icon-only__icon--disabled"],
    ]);
  }, [disabled]);
  return (
    <button
      data-testid={testId}
      className={`button button--subtle-icon-only button--circle ${className}`}
      {...{ disabled }}
      {...props}
    >
      <Icon
        {...{ disabled, icon }}
        style={
          !disabled ? iconStyles : { ...iconStyles, pointerEvents: "none" }
        }
        className={`button--subtle-icon-only__icon ${getIconClassName()}`}
      />
    </button>
  );
};

export const PrimaryLinkButton = ({
  label = "link button",
  disabled,
  ...props
}) => {
  return (
    <button className="button button--link" {...{ disabled }} {...props}>
      {label}
    </button>
  );
};

export const SubtleLinkButton = ({
  label = "link button",
  disabled,
  ...props
}) => {
  return (
    <button className="button button--subtle-link" {...{ disabled }} {...props}>
      {label}
    </button>
  );
};

export const PrimaryIconOnlyButton = ({
  disabled,
  icon,
  iconStyles = {},
  ...props
}) => {
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--primary__icon--disabled"]]);
  }, [disabled]);

  return (
    <button
      className="button button--primary button--circle"
      {...{ disabled }}
      {...props}
    >
      <Icon
        {...{ disabled, icon }}
        style={
          !disabled ? iconStyles : { ...iconStyles, pointerEvents: "none" }
        }
        className={`button--primary__icon ${getIconClassName()}`}
      />
    </button>
  );
};

export const SecondaryIconOnlyButton = ({
  icon,
  iconStyles = {},
  disabled,
  selected,
  className,
  testId,
  ...props
}) => {
  const getIconClassName = useCallback(() => {
    return formatClassName("", [
      [disabled, "button--secondary--icon-only__icon--disabled"],
    ]);
  }, [disabled]);

  return (
    <button
      data-testid={testId}
      className="button button--secondary button--secondary--icon-only"
      {...{ disabled, selected }}
      {...props}
    >
      <Icon
        icon={icon}
        style={
          !disabled ? iconStyles : { ...iconStyles, pointerEvents: "none" }
        }
        className={`button--secondary--icon-only__icon ${getIconClassName()}`}
      />
    </button>
  );
};

export const TertiaryIconOnlyButton = ({
  disabled,
  icon,
  iconStyles = {},
  selected,
  className,
  testId,
  ...props
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [
      [selected, "button--tertiary--icon-only--selected"],
    ]);
  }, [selected]);
  return (
    <button
      data-testid={testId}
      className={`button button--circle button--tertiary--icon-only ${getClassName()}`}
      {...{ disabled, selected }}
      {...props}
    >
      <Icon
        {...{ disabled, icon }}
        style={
          !disabled ? iconStyles : { ...iconStyles, pointerEvents: "none" }
        }
        className="button--tertiary--icon-only__icon"
      />
    </button>
  );
};

export const RedirectButton = ({ label, to, disabled, ...props }) => {
  const handleOnclick = () => {
    window.open(to, "_blank");
  };
  return (
    <button
      className="button button--link"
      {...{ disabled }}
      {...props}
      onClick={handleOnclick}
    >
      {label}
    </button>
  );
};

export const MailButton = ({ label, to, disabled, ...props }) => {
  const handleOnclick = () => {
    window.open(`mailto:${to}`, "_blank");
  };
  return (
    <button
      className="button button--link"
      {...{ disabled }}
      {...props}
      onClick={handleOnclick}
    >
      {label}
    </button>
  );
};

export const DangerButtonRectangle = ({
  label = "label",
  isLoading,
  leftIcon,
  disabled,
  className,
  ...props
}) => {
  const iconStyles = { marginRight: 8 };
  const getClassName = useCallback(() => {
    return formatClassName(className, [
      [isLoading, "button--primary--danger--loading"],
    ]);
  }, [isLoading]);
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--primary__icon--disabled"]]);
  }, [disabled]);

  return (
    <button
      className={`button button--primary--danger ${getClassName()}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {leftIcon && (
        <Icon
          {...{ disabled }}
          icon={leftIcon}
          style={
            !disabled ? iconStyles : { ...iconStyles, pointerEvents: "none" }
          }
          className={`button--primary__icon ${getIconClassName()}`}
        />
      )}
      {isLoading ? <DotsLoading /> : label}
    </button>
  );
};
