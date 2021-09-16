import React, { useCallback } from "react";
import { formatClassName } from "../../../utils";
import { Label } from "../Label/Label";
import { FieldError } from "../FieldError/FieldError";
import "./Inputs.scss";

export const PrimaryInput = ({
  label,
  placeholder,
  value,
  onChange,
  onClick,
  error,
  type = "text",
  className = "",
  containerClassName = "",
  disabled,
  style = {},
  onBlur = () => {},
  testId,
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [
      [error, "input--error"],
      [disabled, "input--disabled"],
    ]);
  }, [error, disabled, className]);

  return (
    <div className={`u-flex-column ${containerClassName}`}>
      {label && <Label htmlFor="password" text={label} disabled={disabled} />}
      <input
        data-testid={testId}
        className={`input input--primary ${getClassName()}`}
        {...{
          placeholder,
          value,
          onChange,
          type,
          disabled,
          onClick,
          style,
          onBlur,
        }}
      />
      {error && <FieldError disabled={disabled} text={error} />}
    </div>
  );
};

export const DatePickerInput = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  className,
  width,
  iconClick,
  onClick,
  style,
  disabled,
}) => {
  const containerStyle = { width: width || "100%" };

  return (
    <div className="input-date u-flex-column u-pos-rel" style={containerStyle}>
      {!disabled && (
        <div
          className="input-date__icon u-pos-abs u-cursor-pointer"
          onClick={iconClick}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75 4.58691C9.02614 4.58691 9.25 4.81077 9.25 5.08691V6.05237H14.7498V5.08691C14.7498 4.81077 14.9736 4.58691 15.2498 4.58691C15.5259 4.58691 15.7498 4.81077 15.7498 5.08691V6.05237H16.4996C17.8803 6.05237 18.9996 7.17166 18.9996 8.55237V17.7408C18.9996 19.1215 17.8803 20.2408 16.4996 20.2408H7.5C6.11929 20.2408 5 19.1215 5 17.7408V8.55237C5 7.17165 6.11929 6.05237 7.5 6.05237H8.25V5.08691C8.25 4.81077 8.47386 4.58691 8.75 4.58691ZM14.7498 7.05237V8.01782C14.7498 8.29396 14.9736 8.51782 15.2498 8.51782C15.5259 8.51782 15.7498 8.29396 15.7498 8.01782V7.05237H16.4996C17.328 7.05237 17.9996 7.72394 17.9996 8.55237V9.86229H6V8.55237C6 7.72394 6.67157 7.05237 7.5 7.05237H8.25V8.01782C8.25 8.29396 8.47386 8.51782 8.75 8.51782C9.02614 8.51782 9.25 8.29396 9.25 8.01782V7.05237H14.7498ZM6 10.8623V17.7408C6 18.5692 6.67157 19.2408 7.5 19.2408H16.4996C17.328 19.2408 17.9996 18.5692 17.9996 17.7408V10.8623H6Z"
              fill="#333B49"
            />
          </svg>
        </div>
      )}
      <PrimaryInput
        {...{
          label,
          placeholder,
          value,
          onChange,
          error,
          className,
          onClick,
          disabled,
          style,
        }}
      />
    </div>
  );
};
