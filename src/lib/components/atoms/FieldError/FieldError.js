import React, { useCallback } from "react";
import { formatClassName } from "../../../utils";
import "./FieldError.scss";

export const FieldError = ({
  text = "",
  disabled,
  style = {},
  className = "",
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [[disabled, "field-error--disabled"]]);
  }, [disabled, className]);

  return (
    <p className={`field-error ${getClassName()}`} style={style}>
      {text}
    </p>
  );
};
