import React, { useCallback } from "react";
import { formatClassName } from "../../../utils";
import "./Label.scss";

export const Label = ({
  htmlFor = "",
  text = "",
  disabled,
  showOptional,
  style = {},
  className = "",
}) => {
  const getLabelClassName = useCallback(() => {
    return formatClassName(className, [[disabled, "label--disabled"]]);
  }, [disabled, className]);

  const getLabelTagClassName = useCallback(() => {
    return formatClassName(null, [
      [disabled, "label-container__label-tag--disabled"],
    ]);
  }, [disabled]);

  return (
    <div className="label-container">
      <label
        className={`label ${getLabelClassName()}`}
        htmlFor={htmlFor}
        style={style}
      >
        {text}
      </label>
      {showOptional && (
        <span
          className={`label-container__label-tag ${getLabelTagClassName()}`}
        >
          (optional)
        </span>
      )}
    </div>
  );
};
