import React, { useCallback } from "react";
import { formatClassName } from "../../../utils";
import { Label } from "../Label/Label";
import { FieldError } from "../FieldError/FieldError";
import "./Select.scss";

export const Select = ({
  id,
  label,
  value,
  options = [],
  placeholder,
  onChange,
  error,
  width,
  disabled,
  optionLabelFormatter,
  style = {},
  className = "",
  containerClassName = "",
  testId,
}) => {
  const selectStyle = { width: width || "100%" };
  const selectIconStyle = { top: label ? 50 : 8 };

  const getSelectClassName = useCallback(() => {
    return formatClassName(className, [
      [error, "select--error"],
      [disabled, "select--disabled"],
      [value, "select--with-value"],
    ]);
  }, [error, disabled, value, className]);

  const getSvgPathClassName = useCallback(() => {
    return formatClassName(null, [[disabled, "select__icon__path--disabled"]]);
  }, [disabled]);

  return (
    <div className={`u-flex-column u-pos-rel ${containerClassName}`}>
      {label && <Label htmlFor={id} text={label} disabled={disabled} />}
      <select
        data-testid={testId}
        className={`select select--primary ${getSelectClassName()}`}
        style={{ ...selectStyle, ...style }}
        {...{ id, value, onChange, disabled, placeholder }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((item) => (
          <option
            value={item.value}
            className="select__option"
            key={item.value}
          >
            {optionLabelFormatter
              ? optionLabelFormatter(item.label)
              : item.label}
          </option>
        ))}
      </select>
      {error && <FieldError text={error} disabled={disabled} />}
      <div className="select__icon" style={selectIconStyle}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            className={`select__icon__path ${getSvgPathClassName()}`}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
