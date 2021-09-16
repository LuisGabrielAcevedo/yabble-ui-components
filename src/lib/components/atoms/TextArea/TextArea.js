import React, { useCallback } from "react";
import { Label } from "../Label/Label";
import { FieldError } from "../FieldError/FieldError";
import { formatClassName } from "../../../utils";
import "./TextArea.scss";

export const TextArea = ({
  id,
  label,
  placeholder,
  value = "",
  onChange,
  error,
  disabled,
  showOptional,
  style = {},
  className = "",
  containerClassName = "",
  testId,
}) => {
  const getTextAreaClassName = useCallback(() => {
    return formatClassName(className, [
      [error, "textarea--error"],
      [disabled, "textarea--disabled"],
    ]);
  }, [error, disabled, className]);

  return (
    <div className={`u-flex-column ${containerClassName}`}>
      {label && (
        <Label
          htmlFor={id}
          text={label}
          disabled={disabled}
          showOptional={showOptional}
        />
      )}
      <textarea
        data-testid={testId}
        value={value}
        className={`textarea textarea--primary ${getTextAreaClassName()}`}
        {...{ id, placeholder, onChange, disabled, style }}
      ></textarea>
      {error && <FieldError text={error} disabled={disabled} />}
    </div>
  );
};
