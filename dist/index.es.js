import React, { useCallback, useEffect, useState } from 'react';
import ReactDom from 'react-dom';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const getNameInitials = name => {
  const splitName = (name || "").split(" ");
  const fisrtLetter = splitName[0] ? splitName[0].charAt(0).toUpperCase() : "";
  const letter = splitName[2] ? splitName[2] : splitName[1];
  const secondLetter = letter ? letter.charAt(0).toUpperCase() : "";
  return `${fisrtLetter}${secondLetter}`;
};

/**
 * applyClassNameIf
 * @param {boolean} condition Condition to evaluate.
 * @param {string} className className to apply if the condition of the first parameter is true.
 * @returns {string} Returns the className if the condition is true or an empty string otherwise.
 */
const applyClassNameIf = (condition, className = '') => condition ? className : '';

/**
 * formatClassName
 * @param {string} additionals Class name to append at the end of the result.
 * @param {[boolean, string][]} conditionals Arrays of tuples. Each tuple has a boolean and a string to append at the compound class name to be returned.
 * @returns {string} A string with the compound class name.
 */
const formatClassName = (additionals = '', conditionals = []) => {
  let modifiers = '';
  conditionals.forEach(elem => {
    if (elem[0]) modifiers += `${elem[1]} ` || '';
  });
  return modifiers.concat(additionals).trim();
};

/**
 * applyVendorPrefix
 * @param {string} property CSS Property to apply vendor prefix to it.
 * @param {string} value Value of the CSS property passed in as the first argument.
 * @returns {{
 *    ["-webkit-$property"]: string
 *    ["-moz-$property"]: string
 *    ["-ms-$property"]: string
 *    ["-o-$property"]: string
 *    $property: string
 * }} An styles object with the css rule vendor prefixed.
 */
const applyVendorPrefix = (property = '', value = '') => ({
  [`-webkit-${property}`]: value,
  [`-moz-${property}`]: value,
  [`-ms-${property}`]: value,
  [`-o-${property}`]: value,
  property: value
});

const sortTableData = (sortedData, field, down) => sortedData.sort(function (a, b) {
  const fielda = a[field] && typeof a[field] === 'string' ? a[field].toLowerCase() : a[field];
  const fieldb = b[field] && typeof b[field] === 'string' ? b[field].toLowerCase() : b[field];
  if (fielda > fieldb) return !down ? 1 : -1;
  if (fieldb > fielda) return !down ? -1 : 1;
  return 0;
});

const formatCurrency = (number, sd = 0) => new Intl.NumberFormat('en-US', {
  minimumFractionDigits: sd,
  maximumFractionDigits: sd
}).format(number);
const formatCurrencyEvents = number => Math.round((+number || 0) * 0.5 * 100) / 100;

const DotsLoading = ({
  color
}) => {
  const bgColorFormatted = { ...(color && {
      backgroundColor: color
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "dots-loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dots-loading__dot",
    style: bgColorFormatted
  }), /*#__PURE__*/React.createElement("div", {
    className: "dots-loading__dot",
    style: bgColorFormatted
  }), /*#__PURE__*/React.createElement("div", {
    className: "dots-loading__dot",
    style: bgColorFormatted
  }));
};

var lightCopyIcon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"M5.5 4H5V4.5V16.592C5 16.8682 5.22386 17.092 5.5 17.092C5.77614 17.092 6 16.8682 6 16.592V5H15.4562C15.7323 5 15.9562 4.77614 15.9562 4.5C15.9562 4.22386 15.7323 4 15.4562 4H5.5ZM8.67388 6.91166H8.17388V7.41166V19.5037V20.0037H8.67388H18.6301H19.1301V19.5037V7.41166V6.91166H18.6301H8.67388ZM9.17388 19.0037V7.91166H18.1301V19.0037H9.17388Z\" fill=\"white\"/>\n</svg>";

const Icon = ({
  size = 24,
  disabled,
  icon = lightCopyIcon,
  iconColor,
  className = '',
  style = {}
}) => {
  const getClassName = () => formatClassName(className, [[disabled, 'icon--disabled']]);

  const stylesFormatted = { ...(iconColor && {
      background: iconColor
    })
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      height: `${size}px`,
      width: `${size}px`,
      ...applyVendorPrefix('mask', `url(${icon}) center center / contain no-repeat`),
      ...stylesFormatted,
      ...style
    },
    className: `icon ${getClassName()}`
  });
};

const PrimaryButtonRectangle = ({
  label = "label",
  isLoading,
  leftIcon,
  disabled,
  className,
  ...props
}) => {
  const iconStyles = {
    marginRight: 8
  };
  const getClassName = useCallback(() => {
    return formatClassName(className, [[isLoading, "button--primary--loading"]]);
  }, [isLoading]);
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--primary__icon--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `button button--primary ${getClassName()}`,
    disabled
  }, props), leftIcon && /*#__PURE__*/React.createElement(Icon, {
    disabled,
    icon: leftIcon,
    style: !disabled ? iconStyles : { ...iconStyles,
      pointerEvents: "none"
    },
    className: `button--primary__icon ${getIconClassName()}`
  }), isLoading ? /*#__PURE__*/React.createElement(DotsLoading, null) : label);
};
const PrimaryButtonRound = ({
  label = "label",
  disabled,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--primary button--round",
    disabled
  }, props), label);
};
const SecondaryButtonRectangle = ({
  label = "label",
  disabled,
  isLoading,
  className,
  ...props
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [[isLoading, "button--secondary--loading"]]);
  }, [isLoading]);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `button button--secondary ${getClassName()}`,
    disabled: disabled || isLoading
  }, props), isLoading ? /*#__PURE__*/React.createElement(DotsLoading, {
    color: "#0D47BB"
  }) : label);
};
const SecondaryButtonRound = ({
  label = "label",
  disabled,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--secondary button--round",
    disabled
  }, props), label);
};
const SubtleButton = ({
  label = "label",
  disabled,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--subtle",
    disabled
  }, props), label);
};
const SubtleIconOnlyButton = ({
  disabled,
  icon,
  iconStyles = {},
  testId,
  className,
  ...props
}) => {
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--subtle-icon-only__icon--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("button", _extends({
    "data-testid": testId,
    className: `button button--subtle-icon-only button--circle ${className}`,
    disabled
  }, props), /*#__PURE__*/React.createElement(Icon, {
    disabled,
    icon,
    style: !disabled ? iconStyles : { ...iconStyles,
      pointerEvents: "none"
    },
    className: `button--subtle-icon-only__icon ${getIconClassName()}`
  }));
};
const PrimaryLinkButton = ({
  label = "link button",
  disabled,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--link",
    disabled
  }, props), label);
};
const SubtleLinkButton = ({
  label = "link button",
  disabled,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--subtle-link",
    disabled
  }, props), label);
};
const PrimaryIconOnlyButton = ({
  disabled,
  icon,
  iconStyles = {},
  ...props
}) => {
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--primary__icon--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--primary button--circle",
    disabled
  }, props), /*#__PURE__*/React.createElement(Icon, {
    disabled,
    icon,
    style: !disabled ? iconStyles : { ...iconStyles,
      pointerEvents: "none"
    },
    className: `button--primary__icon ${getIconClassName()}`
  }));
};
const SecondaryIconOnlyButton = ({
  icon,
  iconStyles = {},
  disabled,
  selected,
  className,
  testId,
  ...props
}) => {
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--secondary--icon-only__icon--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("button", _extends({
    "data-testid": testId,
    className: "button button--secondary button--secondary--icon-only",
    disabled,
    selected
  }, props), /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    style: !disabled ? iconStyles : { ...iconStyles,
      pointerEvents: "none"
    },
    className: `button--secondary--icon-only__icon ${getIconClassName()}`
  }));
};
const TertiaryIconOnlyButton = ({
  disabled,
  icon,
  iconStyles = {},
  selected,
  className,
  testId,
  ...props
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [[selected, "button--tertiary--icon-only--selected"]]);
  }, [selected]);
  return /*#__PURE__*/React.createElement("button", _extends({
    "data-testid": testId,
    className: `button button--circle button--tertiary--icon-only ${getClassName()}`,
    disabled,
    selected
  }, props), /*#__PURE__*/React.createElement(Icon, {
    disabled,
    icon,
    style: !disabled ? iconStyles : { ...iconStyles,
      pointerEvents: "none"
    },
    className: "button--tertiary--icon-only__icon"
  }));
};
const RedirectButton = ({
  label,
  to,
  disabled,
  ...props
}) => {
  const handleOnclick = () => {
    window.open(to, "_blank");
  };

  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--link",
    disabled
  }, props, {
    onClick: handleOnclick
  }), label);
};
const MailButton = ({
  label,
  to,
  disabled,
  ...props
}) => {
  const handleOnclick = () => {
    window.open(`mailto:${to}`, "_blank");
  };

  return /*#__PURE__*/React.createElement("button", _extends({
    className: "button button--link",
    disabled
  }, props, {
    onClick: handleOnclick
  }), label);
};
const DangerButtonRectangle = ({
  label = "label",
  isLoading,
  leftIcon,
  disabled,
  className,
  ...props
}) => {
  const iconStyles = {
    marginRight: 8
  };
  const getClassName = useCallback(() => {
    return formatClassName(className, [[isLoading, "button--primary--danger--loading"]]);
  }, [isLoading]);
  const getIconClassName = useCallback(() => {
    return formatClassName("", [[disabled, "button--primary__icon--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `button button--primary--danger ${getClassName()}`,
    disabled: disabled || isLoading
  }, props), leftIcon && /*#__PURE__*/React.createElement(Icon, {
    disabled,
    icon: leftIcon,
    style: !disabled ? iconStyles : { ...iconStyles,
      pointerEvents: "none"
    },
    className: `button--primary__icon ${getIconClassName()}`
  }), isLoading ? /*#__PURE__*/React.createElement(DotsLoading, null) : label);
};

const Card = ({
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card u-flex-column"
  }, props), children);
};

const Label = ({
  htmlFor = "",
  text = "",
  disabled,
  showOptional,
  style = {},
  className = ""
}) => {
  const getLabelClassName = useCallback(() => {
    return formatClassName(className, [[disabled, "label--disabled"]]);
  }, [disabled, className]);
  const getLabelTagClassName = useCallback(() => {
    return formatClassName(null, [[disabled, "label-container__label-tag--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("div", {
    className: "label-container"
  }, /*#__PURE__*/React.createElement("label", {
    className: `label ${getLabelClassName()}`,
    htmlFor: htmlFor,
    style: style
  }, text), showOptional && /*#__PURE__*/React.createElement("span", {
    className: `label-container__label-tag ${getLabelTagClassName()}`
  }, "(optional)"));
};

const FieldError = ({
  text = "",
  disabled,
  style = {},
  className = ""
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [[disabled, "field-error--disabled"]]);
  }, [disabled, className]);
  return /*#__PURE__*/React.createElement("p", {
    className: `field-error ${getClassName()}`,
    style: style
  }, text);
};

const PrimaryInput = ({
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
  testId
}) => {
  const getClassName = useCallback(() => {
    return formatClassName(className, [[error, "input--error"], [disabled, "input--disabled"]]);
  }, [error, disabled, className]);
  return /*#__PURE__*/React.createElement("div", {
    className: `u-flex-column ${containerClassName}`
  }, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: "password",
    text: label,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("input", {
    "data-testid": testId,
    className: `input input--primary ${getClassName()}`,
    placeholder,
    value,
    onChange,
    type,
    disabled,
    onClick,
    style,
    onBlur
  }), error && /*#__PURE__*/React.createElement(FieldError, {
    disabled: disabled,
    text: error
  }));
};
const DatePickerInput = ({
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
  disabled
}) => {
  const containerStyle = {
    width: width || "100%"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "input-date u-flex-column u-pos-rel",
    style: containerStyle
  }, !disabled && /*#__PURE__*/React.createElement("div", {
    className: "input-date__icon u-pos-abs u-cursor-pointer",
    onClick: iconClick
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.75 4.58691C9.02614 4.58691 9.25 4.81077 9.25 5.08691V6.05237H14.7498V5.08691C14.7498 4.81077 14.9736 4.58691 15.2498 4.58691C15.5259 4.58691 15.7498 4.81077 15.7498 5.08691V6.05237H16.4996C17.8803 6.05237 18.9996 7.17166 18.9996 8.55237V17.7408C18.9996 19.1215 17.8803 20.2408 16.4996 20.2408H7.5C6.11929 20.2408 5 19.1215 5 17.7408V8.55237C5 7.17165 6.11929 6.05237 7.5 6.05237H8.25V5.08691C8.25 4.81077 8.47386 4.58691 8.75 4.58691ZM14.7498 7.05237V8.01782C14.7498 8.29396 14.9736 8.51782 15.2498 8.51782C15.5259 8.51782 15.7498 8.29396 15.7498 8.01782V7.05237H16.4996C17.328 7.05237 17.9996 7.72394 17.9996 8.55237V9.86229H6V8.55237C6 7.72394 6.67157 7.05237 7.5 7.05237H8.25V8.01782C8.25 8.29396 8.47386 8.51782 8.75 8.51782C9.02614 8.51782 9.25 8.29396 9.25 8.01782V7.05237H14.7498ZM6 10.8623V17.7408C6 18.5692 6.67157 19.2408 7.5 19.2408H16.4996C17.328 19.2408 17.9996 18.5692 17.9996 17.7408V10.8623H6Z",
    fill: "#333B49"
  }))), /*#__PURE__*/React.createElement(PrimaryInput, {
    label,
    placeholder,
    value,
    onChange,
    error,
    className,
    onClick,
    disabled,
    style
  }));
};

const Face = ({
  sentiment
}) => {
  return {
    negative: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        marginRight: '1em'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.5",
      stroke: "#333B49"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.85651 23C10.6341 20.3417 13.0903 18.4 15.9999 18.4C18.9096 18.4 21.3657 20.3417 22.1433 23",
      stroke: "#333B49",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "11.9999",
      cy: "12",
      r: "1.1",
      fill: "#333B49",
      stroke: "#333B49"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.9994",
      cy: "12.0001",
      r: "1.1",
      fill: "#333B49",
      stroke: "#333B49"
    })),
    positive: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        marginRight: '1em'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "11.5",
      stroke: "#5A616B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.7992 13.7969C16.7992 16.4478 14.6502 18.5969 11.9992 18.5969C9.34825 18.5969 7.19922 16.4478 7.19922 13.7969",
      stroke: "#5A616B"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9.00078",
      cy: "9.00078",
      r: "0.7",
      fill: "#5A616B",
      stroke: "#5A616B"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15.0008",
      cy: "9.00078",
      r: "0.7",
      fill: "#5A616B",
      stroke: "#5A616B"
    })),
    neutral: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        marginRight: '1em'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.5",
      stroke: "#333B49"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "11.9999",
      cy: "12",
      r: "1.1",
      fill: "#333B49",
      stroke: "#333B49"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.9994",
      cy: "12.0001",
      r: "1.1",
      fill: "#333B49",
      stroke: "#333B49"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10.8999",
      y1: "20.9",
      x2: "21.0999",
      y2: "20.9",
      stroke: "#333B49",
      strokeLinecap: "round"
    }))
  }[sentiment] || /*#__PURE__*/React.createElement("span", null);
};

const Response = ({
  id,
  text,
  tags,
  sentiment
}) => /*#__PURE__*/React.createElement("div", {
  className: "response",
  id: id
}, /*#__PURE__*/React.createElement("p", {
  className: "response__text",
  dangerouslySetInnerHTML: {
    __html: text
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "response__face-tag-wrapper"
}, /*#__PURE__*/React.createElement(Face, {
  sentiment: sentiment
}), tags.map(tag => /*#__PURE__*/React.createElement("div", {
  key: tag,
  className: "response__tag"
}, tag))));

const Select = ({
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
  testId
}) => {
  const selectStyle = {
    width: width || "100%"
  };
  const selectIconStyle = {
    top: label ? 50 : 8
  };
  const getSelectClassName = useCallback(() => {
    return formatClassName(className, [[error, "select--error"], [disabled, "select--disabled"], [value, "select--with-value"]]);
  }, [error, disabled, value, className]);
  const getSvgPathClassName = useCallback(() => {
    return formatClassName(null, [[disabled, "select__icon__path--disabled"]]);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("div", {
    className: `u-flex-column u-pos-rel ${containerClassName}`
  }, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: id,
    text: label,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("select", {
    "data-testid": testId,
    className: `select select--primary ${getSelectClassName()}`,
    style: { ...selectStyle,
      ...style
    },
    id,
    value,
    onChange,
    disabled,
    placeholder
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(item => /*#__PURE__*/React.createElement("option", {
    value: item.value,
    className: "select__option",
    key: item.value
  }, optionLabelFormatter ? optionLabelFormatter(item.label) : item.label))), error && /*#__PURE__*/React.createElement(FieldError, {
    text: error,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: "select__icon",
    style: selectIconStyle
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9L12 15L18 9",
    className: `select__icon__path ${getSvgPathClassName()}`,
    strokeLinecap: "round"
  }))));
};

const TextArea = ({
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
  testId
}) => {
  const getTextAreaClassName = useCallback(() => {
    return formatClassName(className, [[error, "textarea--error"], [disabled, "textarea--disabled"]]);
  }, [error, disabled, className]);
  return /*#__PURE__*/React.createElement("div", {
    className: `u-flex-column ${containerClassName}`
  }, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: id,
    text: label,
    disabled: disabled,
    showOptional: showOptional
  }), /*#__PURE__*/React.createElement("textarea", {
    "data-testid": testId,
    value: value,
    className: `textarea textarea--primary ${getTextAreaClassName()}`,
    id,
    placeholder,
    onChange,
    disabled,
    style
  }), error && /*#__PURE__*/React.createElement(FieldError, {
    text: error,
    disabled: disabled
  }));
};

var addIcon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"11.5334\" y=\"19\" width=\"14\" height=\"0.933333\" rx=\"0.466667\" transform=\"rotate(-90 11.5334 19)\" fill=\"#5A616B\"/>\n<rect x=\"5\" y=\"11.5333\" width=\"14\" height=\"0.933333\" rx=\"0.466667\" fill=\"#5A616B\"/>\n</svg>";

const Menu = ({
  filters,
  handleItemClick,
  item,
  setItem
}) => {
  const show = item?.subject_type_id === "demographics";

  const click = menu_item => {
    if (item?.subject_type_id !== "demographics") handleItemClick({
      subject_type_id: menu_item.subject_type_id,
      subject_id: ""
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "dropdown__menu-item-container",
    onMouseLeave: () => setItem(null)
  }, show && /*#__PURE__*/React.createElement(NestedMenuItemComp, {
    sid: item.subject_type_id,
    hic: handleItemClick,
    filters
  }), /*#__PURE__*/React.createElement("div", {
    className: "dropdown__menu-content"
  }, filters.map((menu_item, index) => /*#__PURE__*/React.createElement("div", {
    className: "dropdown__menu-item",
    "data-testid": "dropdown__menu-item",
    key: index,
    onMouseOver: () => setItem(menu_item),
    onClick: () => click(menu_item)
  }, menu_item.subject_type_name))));
};
const NestedMenuItemComp = ({
  sid,
  hic,
  filters
}) => {
  const subjects = filters.filter(data => data.subject_type_id === sid)[0].subjects;

  const addFilterAction = subject => hic({
    subject_id: subject.subject_id,
    subject_type_id: sid
  });

  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown__menu-content-nested"
  }, subjects.map((subject, index) => /*#__PURE__*/React.createElement("div", {
    className: "dropdown__menu-item",
    "data-testid": "dropdown__menu-subitem",
    key: index,
    onClick: () => addFilterAction(subject)
  }, subject.subject_name)));
};
const NestedMenu = ({
  addFilter,
  filters,
  disabled
}) => {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const handleRightClick = () => setAnchorEl(true);

  const handleClose = () => {
    if (anchorEl) setAnchorEl(false);
  };

  const handleItemClick = item => {
    addFilter(item);
    setAnchorEl(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "u-pos-rel"
  }, /*#__PURE__*/React.createElement(SubtleIconOnlyButton, {
    testId: "add-filters",
    id: "ddop",
    onClick: handleRightClick,
    label: "Add filters",
    disabled: disabled,
    icon: addIcon
  }), anchorEl && /*#__PURE__*/React.createElement(Menu, {
    filters,
    handleItemClick,
    item,
    setItem
  }));
};

const PopupList = ({
  options = [],
  onSelect = () => {}
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "popup-list__content"
  }, options.map(op => /*#__PURE__*/React.createElement("button", {
    className: "popup-list__content__option",
    key: op,
    onClick: () => onSelect(op)
  }, op)));
};

const iconButtonStyle = {
  height: "32px",
  width: "32px"
};
const iconStyles = {
  height: "20px",
  width: "20px"
};
const Popup = ({
  icon,
  options = [],
  onSelect,
  component
}) => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "popup"
  }, /*#__PURE__*/React.createElement(ComponentToRender, {
    icon,
    onClick,
    iconStyles,
    selected: visible,
    style: iconButtonStyle,
    className: "popup__button",
    testId: "popup-button"
  }), visible && /*#__PURE__*/React.createElement(PopupList, {
    options,
    onSelect
  }));
};

const useBodyOverflow = isActive => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isActive]);
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, []);
};

const Modal = ({
  opened,
  children,
  onClose,
  backDropClickDisabled = false
}) => {
  useBodyOverflow(opened);

  const cardOnClick = e => {
    e.stopPropagation();
  };

  const backdropClick = () => {
    if (!backDropClickDisabled) onClose();
  };

  return opened ? /*#__PURE__*/ReactDom.createPortal( /*#__PURE__*/React.createElement("div", {
    "data-testid": "modal-container",
    className: "modal-container",
    onClick: backdropClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container__content",
    onClick: cardOnClick
  }, children)), document.getElementById('portal')) : null;
};

const CircleLoading = ({
  text,
  color
}) => {
  const borderColorFormatted = { ...(color && {
      borderColor: color
    }),
    ...(color && {
      borderTopColor: color
    }),
    ...(color && {
      borderTopColor: color
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "circle-loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "circle-loading__loader-spinner",
    style: borderColorFormatted
  }), text && /*#__PURE__*/React.createElement("span", {
    className: "circle-loading__text",
    style: {
      color
    }
  }, text));
};

/* eslint-disable react/prop-types */
const Loader = ({
  size = 'regular',
  inverted,
  className = '',
  style = {}
}) => {
  const sizeModifierClassName = {
    small: 'loader-main--small',
    regular: 'loader-main--regular',
    medium: 'loader-main--medium',
    large: 'loader-main--large'
  }[size] || 'loader-main--regular';
  return /*#__PURE__*/React.createElement("div", {
    className: `loader-main ${sizeModifierClassName} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    className: "loader-main__svg",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    className: `loader-main__rectangle ${applyClassNameIf(inverted, 'loader-main__rectangle--inverted')}`,
    d: "M118.652 0.00362863L0 118.656L8.40668 127.062L127.059 8.4103L118.652 0.00362863Z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "loader-main__circle-wrapper"
  }, /*#__PURE__*/React.createElement("path", {
    className: `loader-main__circle ${applyClassNameIf(inverted, 'loader-main__circle--inverted')}`,
    d: "M39.749 19.8149C39.749 30.7653 30.8844 39.6298 19.9341 39.6298C8.98371 39.6298 0.119141 30.7653 0.119141 19.8149C0.119141 8.86457 8.98371 0 19.9341 0C30.8844 0 39.749 8.86457 39.749 19.8149Z"
  }))));
};

/* eslint-disable react/prop-types */
const Badge = ({
  label = 'badge',
  className = '',
  style = {}
}) => {
  return /*#__PURE__*/React.createElement("span", {
    className: `badge ${className}`,
    style: style
  }, label);
};

var SignIn = "<svg\n    width=\"295\"\n    height=\"264\"\n    viewBox=\"0 0 295 264\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g clip-path=\"url(#clip0)\">\n    <path\n      d=\"M35.9778 205.647L32.683 192.642C26.8409 190.164 20.8638 188.018 14.7802 186.213L14.3642 192.258L12.6773 185.599C5.13264 183.443 0 182.493 0 182.493C0 182.493 6.93301 208.879 21.4745 229.051L38.4185 232.029L25.2552 233.929C27.0851 236.132 29.0517 238.218 31.1433 240.174C52.2971 259.825 75.8584 268.841 83.769 260.312C91.6796 251.783 80.9439 228.938 59.7901 209.286C53.2322 203.194 44.9942 198.306 36.7479 194.458L35.9778 205.647Z\"\n      fill=\"#E6E6E6\"\n    />\n    <path\n      d=\"M67.3135 191.524L71.2103 178.686C67.4889 173.542 63.4807 168.613 59.2047 163.921L55.7268 168.88L57.722 162.307C52.377 156.558 48.4738 153.09 48.4738 153.09C48.4738 153.09 40.7811 179.264 42.8108 204.055L55.7771 215.37L43.5277 210.187C43.9563 213.019 44.5626 215.822 45.3428 218.579C53.3019 246.344 68.8148 266.252 79.9919 263.042C91.1689 259.833 93.7776 234.723 85.8185 206.957C83.3511 198.35 78.8239 189.903 73.7519 182.343L67.3135 191.524Z\"\n      fill=\"#E6E6E6\"\n    />\n    <path\n      d=\"M252.818 244.034L255.27 241.384C254.973 239.701 254.581 238.036 254.097 236.397L252.672 237.188L253.928 235.831C253.309 233.81 252.771 232.511 252.771 232.511C252.771 232.511 247.834 237.944 245.413 244.185L247.223 248.451L244.866 245.755C244.637 246.491 244.455 247.241 244.32 248C242.985 255.66 244.403 262.305 247.486 262.844C250.57 263.382 254.151 257.608 255.486 249.949C255.852 247.502 255.842 245.013 255.455 242.569L252.818 244.034Z\"\n      fill=\"#E6E6E6\"\n    />\n    <path\n      d=\"M289.089 249.275L292.556 248.275C293.172 246.68 293.696 245.052 294.129 243.399L292.5 243.339L294.275 242.827C294.789 240.777 295 239.387 295 239.387C295 239.387 287.968 241.483 282.672 245.574L282.018 250.162L281.393 246.634C280.817 247.146 280.273 247.693 279.766 248.274C274.667 254.14 272.448 260.563 274.81 262.618C277.172 264.674 283.219 261.585 288.318 255.718C289.895 253.813 291.172 251.677 292.103 249.385L289.089 249.275Z\"\n      fill=\"#E6E6E6\"\n    />\n    <path\n      d=\"M192.156 17.9116V244.967C192.156 249.717 190.27 254.272 186.914 257.631C183.557 260.99 179.006 262.877 174.259 262.878H86.0954C81.3479 262.879 76.7946 260.992 73.437 257.633C70.0793 254.274 68.1923 249.718 68.1909 244.967V17.9116C68.1923 13.1603 70.0793 8.60407 73.437 5.24508C76.7947 1.88608 81.3479 -0.00059907 86.0954 1.42689e-07H96.7903C96.2652 1.2925 96.0653 2.69431 96.2083 4.08222C96.3512 5.47013 96.8327 6.80164 97.6102 7.95972C98.3878 9.11781 99.4377 10.067 100.668 10.7239C101.898 11.3808 103.27 11.7252 104.664 11.727H154.929C156.324 11.7252 157.696 11.3808 158.926 10.7239C160.156 10.067 161.206 9.11784 161.983 7.95975C162.761 6.80166 163.242 5.47014 163.385 4.08223C163.528 2.69431 163.328 1.2925 162.803 5.80226e-06H174.259C179.006 0.000966529 183.557 1.88839 186.913 5.24726C190.27 8.60613 192.156 13.1615 192.156 17.9116Z\"\n      fill=\"#3F3D56\"\n    />\n    <path\n      d=\"M117.751 94.0396C117.751 92.4842 118.16 90.956 118.937 89.609C119.714 88.262 120.832 87.1436 122.178 86.3664C120.832 85.5881 119.305 85.1782 117.751 85.1779C116.196 85.1775 114.669 85.5868 113.323 86.3645C111.976 87.1422 110.858 88.2609 110.081 89.6082C109.304 90.9555 108.894 92.4838 108.894 94.0396C108.894 95.5954 109.304 97.1238 110.081 98.4711C110.858 99.8183 111.976 100.937 113.323 101.715C114.669 102.492 116.196 102.902 117.751 102.901C119.305 102.901 120.832 102.491 122.178 101.713C120.832 100.936 119.714 99.8173 118.937 98.4702C118.16 97.1232 117.751 95.5951 117.751 94.0396Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M128.882 94.0396C128.882 92.4842 129.291 90.956 130.068 89.609C130.845 88.262 131.963 87.1436 133.31 86.3664C131.964 85.5881 130.437 85.1782 128.882 85.1779C127.328 85.1775 125.8 85.5868 124.454 86.3645C123.108 87.1422 121.99 88.2609 121.212 89.6082C120.435 90.9555 120.026 92.4838 120.026 94.0396C120.026 95.5954 120.435 97.1238 121.212 98.4711C121.99 99.8183 123.108 100.937 124.454 101.715C125.8 102.492 127.328 102.902 128.882 102.901C130.437 102.901 131.964 102.491 133.31 101.713C131.963 100.936 130.845 99.8173 130.068 98.4702C129.291 97.1232 128.882 95.5951 128.882 94.0396Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M139.761 102.901C144.651 102.901 148.615 98.9339 148.615 94.0397C148.615 89.1454 144.651 85.1779 139.761 85.1779C134.871 85.1779 130.906 89.1454 130.906 94.0397C130.906 98.9339 134.871 102.901 139.761 102.901Z\"\n      fill=\"#0804B8\"\n    />\n    <path\n      d=\"M169.788 152.036H90.6399V152.778H169.788V152.036Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M93.1395 147.404C94.5199 147.404 95.6389 146.284 95.6389 144.902C95.6389 143.521 94.5199 142.401 93.1395 142.401C91.7592 142.401 90.6401 143.521 90.6401 144.902C90.6401 146.284 91.7592 147.404 93.1395 147.404Z\"\n      fill=\"#0804B8\"\n    />\n    <path d=\"M169.788 177.05H90.6399V177.792H169.788V177.05Z\" fill=\"white\" />\n    <path\n      d=\"M93.1395 172.418C94.5199 172.418 95.6389 171.298 95.6389 169.917C95.6389 168.535 94.5199 167.415 93.1395 167.415C91.7592 167.415 90.6401 168.535 90.6401 169.917C90.6401 171.298 91.7592 172.418 93.1395 172.418Z\"\n      fill=\"#0804B8\"\n    />\n    <path\n      d=\"M154.558 121.718H102.953C102.462 121.717 101.991 121.522 101.643 121.174C101.296 120.827 101.101 120.355 101.1 119.863V68.2159C101.101 67.7243 101.296 67.2529 101.643 66.9052C101.991 66.5576 102.462 66.362 102.953 66.3614H154.558C155.05 66.362 155.521 66.5576 155.868 66.9052C156.216 67.2529 156.411 67.7243 156.412 68.2159V119.863C156.411 120.355 156.216 120.827 155.868 121.174C155.521 121.522 155.05 121.717 154.558 121.718ZM102.953 67.1032C102.658 67.1036 102.376 67.2209 102.167 67.4295C101.959 67.6381 101.842 67.9209 101.841 68.2159V119.863C101.842 120.158 101.959 120.441 102.167 120.65C102.376 120.859 102.658 120.976 102.953 120.976H154.558C154.853 120.976 155.136 120.859 155.344 120.65C155.553 120.441 155.67 120.158 155.67 119.863V68.2159C155.67 67.9209 155.553 67.6381 155.344 67.4295C155.136 67.2209 154.853 67.1036 154.558 67.1032H102.953Z\"\n      fill=\"white\"\n    />\n    <path\n      d=\"M168.305 193.68H143.36C142.541 193.68 141.878 194.345 141.878 195.164V203.87C141.878 204.69 142.541 205.354 143.36 205.354H168.305C169.124 205.354 169.788 204.69 169.788 203.87V195.164C169.788 194.345 169.124 193.68 168.305 193.68Z\"\n      fill=\"#0804B8\"\n    />\n    <path d=\"M295 262.515H0.294556V263.257H295V262.515Z\" fill=\"#3F3D56\" />\n    <path\n      d=\"M238.861 120.575C238.861 120.575 237.835 127.078 238.861 128.105C239.887 129.131 232.364 137.688 232.364 137.688L226.208 129.131C226.208 129.131 228.944 124.682 227.918 120.917L238.861 120.575Z\"\n      fill=\"#FFB8B8\"\n    />\n    <path\n      d=\"M216.292 169.518L211.844 217.093L213.552 254.058L221.76 251.663L222.104 218.463L231.681 189.713L237.493 220.859L236.808 252.348L247.068 252.69L247.753 217.779L248.955 169.02L216.292 169.518Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M237.151 251.321V258.851C237.151 258.851 235.441 264.327 240.913 263.985C246.385 263.642 246.043 261.246 246.043 261.246L243.991 252.005L237.151 251.321Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M221.42 251.321V258.851C221.42 258.851 223.13 264.327 217.658 263.985C212.186 263.642 212.528 261.246 212.528 261.246L214.58 252.005L221.42 251.321Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M233.048 124.34C237.392 124.34 240.913 120.815 240.913 116.467C240.913 112.12 237.392 108.595 233.048 108.595C228.703 108.595 225.182 112.12 225.182 116.467C225.182 120.815 228.703 124.34 233.048 124.34Z\"\n      fill=\"#FFB8B8\"\n    />\n    <path\n      d=\"M232.706 133.923L233.39 130.5H235.099L238.406 125.74L241.255 128.447L241.939 144.533H223.472L225.182 127.42L227.672 125.74C227.672 125.74 227.234 131.527 232.022 131.527L232.706 133.923Z\"\n      fill=\"#575A89\"\n    />\n    <path\n      d=\"M225.524 130.158C225.524 130.158 228.356 133.746 232.583 133.492C236.81 133.238 240.913 129.816 240.913 129.816L246.727 174.311C246.727 174.311 240.229 174.995 238.177 171.572L222.446 171.23L222.788 129.816L225.524 130.158Z\"\n      fill=\"#D0CDE1\"\n    />\n    <path\n      d=\"M227.833 125.15L212.87 132.554L216.632 153.775C216.632 153.775 218 161.647 216.632 164.727C215.264 167.807 213.896 188.344 213.896 188.344C213.896 188.344 229.286 190.055 227.234 165.754C225.182 141.453 227.833 125.15 227.833 125.15Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M218.684 176.364L220.736 178.418C220.736 178.418 226.892 189.028 229.628 185.263C232.364 181.498 224.84 174.995 224.84 174.995L221.42 172.257L218.684 176.364Z\"\n      fill=\"#FFB8B8\"\n    />\n    <path\n      d=\"M238.414 125.15L253.225 132.554L248.095 157.882C248.095 157.882 248.437 166.096 250.147 170.546C251.857 174.995 251.173 188.001 251.173 188.001C251.173 188.001 249.121 195.873 244.675 176.364C240.229 156.855 238.414 125.15 238.414 125.15Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M249.805 164.043H246.727C246.727 164.043 236.467 162.673 237.151 166.781C237.835 170.888 247.411 169.861 247.411 169.861L251.173 169.519L249.805 164.043Z\"\n      fill=\"#FFB8B8\"\n    />\n    <path\n      d=\"M214.922 131.527L212.528 132.554C212.528 132.554 210.134 137.688 209.792 139.399C209.45 141.111 205.346 161.647 206.372 164.043C207.398 166.438 217.658 179.102 217.658 179.102L223.472 172.942L214.922 161.304L217.316 146.587L214.922 131.527Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M248.095 131.869L252.62 132.252L253.567 132.554C253.567 132.554 263.142 158.566 261.09 162.674C259.039 166.781 250.147 174.311 250.147 174.311L247.753 163.7L252.199 159.593L247.753 145.902L248.095 131.869Z\"\n      fill=\"#2F2E41\"\n    />\n    <path\n      d=\"M239.702 110.397C239.702 110.397 241.76 106.533 237.233 106.181C237.233 106.181 233.117 103.722 229.825 106.533C229.825 106.533 226.944 105.83 226.121 107.938C226.121 107.938 225.709 106.884 226.944 106.181C226.944 106.181 224.063 105.479 224.063 108.992C224.063 108.992 222.828 112.505 224.063 115.667C225.298 118.829 225.709 119.18 225.709 119.18C225.709 119.18 223.68 112.551 228.619 112.2C233.558 111.849 239.085 108.816 239.496 112.681C239.908 116.545 240.731 117.599 240.731 117.599C240.731 117.599 244.435 111.978 239.702 110.397Z\"\n      fill=\"#2F2E41\"\n    />\n  </g>\n  <defs>\n    <clipPath id=\"clip0\">\n      <rect width=\"295\" height=\"264\" fill=\"white\" />\n    </clipPath>\n  </defs>\n</svg>";

var SignUp = "<svg\n  width=\"368\"\n  height=\"283\"\n  viewBox=\"0 0 368 283\"\n  fill=\"none\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <path\n    d=\"M84.7353 195.853L113.227 151.009L49.4188 110.399L16.4665 162.264L69.244 195.853H84.7353Z\"\n    fill=\"#F0F0F0\"\n  />\n  <path\n    d=\"M125.111 209.842H54.5355V195.623H125.111V209.842ZM55.4521 208.925H124.194V196.54H55.4521V208.925Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M116.403 207.319C118.935 207.319 120.986 205.266 120.986 202.733C120.986 200.199 118.935 198.146 116.403 198.146C113.872 198.146 111.821 200.199 111.821 202.733C111.821 205.266 113.872 207.319 116.403 207.319Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M103.572 207.319C106.103 207.319 108.154 205.266 108.154 202.733C108.154 200.199 106.103 198.146 103.572 198.146C101.041 198.146 98.9888 200.199 98.9888 202.733C98.9888 205.266 101.041 207.319 103.572 207.319Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M90.7397 207.319C93.2708 207.319 95.3226 205.266 95.3226 202.733C95.3226 200.199 93.2708 198.146 90.7397 198.146C88.2087 198.146 86.1569 200.199 86.1569 202.733C86.1569 205.266 88.2087 207.319 90.7397 207.319Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M77.9078 207.319C80.4388 207.319 82.4906 205.266 82.4906 202.733C82.4906 200.199 80.4388 198.146 77.9078 198.146C75.3768 198.146 73.325 200.199 73.325 202.733C73.325 205.266 75.3768 207.319 77.9078 207.319Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M65.076 207.319C67.607 207.319 69.6588 205.266 69.6588 202.733C69.6588 200.199 67.607 198.146 65.076 198.146C62.545 198.146 60.4932 200.199 60.4932 202.733C60.4932 205.266 62.545 207.319 65.076 207.319Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M208.976 51.8298V16.9708H226.391V0H141.151V85.3128H214.017V76.9716C214.017 75.4167 214.323 73.877 214.918 72.4405C215.513 71.004 216.384 69.6987 217.482 68.5992C218.581 67.4998 219.885 66.6276 221.32 66.0326C222.756 65.4375 224.294 65.1313 225.848 65.1313H226.391V51.8298H208.976Z\"\n    fill=\"#F0F0F0\"\n  />\n  <path\n    d=\"M303.382 220.162H246.555V232.088H303.382V220.162Z\"\n    fill=\"#0804B8\"\n  />\n  <path d=\"M315.756 161.452H232.349V172.46H315.756V161.452Z\" fill=\"#F0F0F0\" />\n  <path d=\"M356.543 282.083H0V283H356.543V282.083Z\" fill=\"#3F3D56\" />\n  <path\n    d=\"M330.048 283H225.848C222.59 282.996 219.466 281.699 217.163 279.394C214.859 277.088 213.563 273.962 213.559 270.701V76.9716C213.563 73.7109 214.859 70.5847 217.162 68.279C219.466 65.9733 222.59 64.6763 225.848 64.6726H330.048C333.306 64.6763 336.429 65.9733 338.733 68.279C341.037 70.5847 342.333 73.7109 342.336 76.9716V270.701C342.333 273.962 341.037 277.088 338.733 279.394C336.429 281.699 333.306 282.996 330.048 283V283ZM225.848 65.5899C222.833 65.5934 219.942 66.7936 217.81 68.9274C215.678 71.0611 214.479 73.9541 214.476 76.9716V270.701C214.479 273.719 215.678 276.612 217.81 278.745C219.942 280.879 222.833 282.079 225.848 282.083H330.048C333.063 282.079 335.953 280.879 338.085 278.745C340.217 276.612 341.416 273.719 341.42 270.701V76.9716C341.416 73.9541 340.217 71.0611 338.085 68.9274C335.953 66.7936 333.063 65.5934 330.048 65.5899H225.848Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M265.574 73.846C265.03 73.846 264.499 73.6846 264.046 73.3823C263.594 73.0799 263.242 72.65 263.034 72.1472C262.826 71.6443 262.771 71.091 262.877 70.5571C262.983 70.0233 263.245 69.5329 263.63 69.148C264.014 68.7631 264.504 68.501 265.038 68.3949C265.571 68.2887 266.124 68.3432 266.626 68.5515C267.129 68.7598 267.558 69.1125 267.86 69.5651C268.163 70.0176 268.324 70.5497 268.324 71.094C268.323 71.8237 268.033 72.5232 267.518 73.0391C267.002 73.555 266.303 73.8452 265.574 73.846V73.846ZM265.574 69.2593C265.212 69.2593 264.857 69.3669 264.556 69.5685C264.254 69.7701 264.019 70.0567 263.881 70.3919C263.742 70.7272 263.705 71.096 263.776 71.4519C263.847 71.8078 264.022 72.1347 264.278 72.3913C264.534 72.6479 264.861 72.8226 265.216 72.8934C265.572 72.9642 265.941 72.9279 266.276 72.789C266.611 72.6502 266.897 72.415 267.098 72.1133C267.3 71.8116 267.407 71.4569 267.407 71.094C267.407 70.6076 267.213 70.1412 266.87 69.7973C266.526 69.4533 266.06 69.2598 265.574 69.2593V69.2593Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M292.613 70.6353H272.448V71.5527H292.613V70.6353Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M334.087 77.9741V114.668C324.364 114.667 315.039 110.801 308.163 103.92C301.288 97.0386 297.425 87.7057 297.425 77.9741H334.087Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M334.545 270.616H221.35V77.5154H334.545V270.616ZM222.267 269.699H333.629V78.4327H222.267V269.699Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    opacity=\"0.1\"\n    d=\"M307.507 112.374C314.341 112.374 319.88 106.83 319.88 99.9903C319.88 93.1507 314.341 87.6062 307.507 87.6062C300.673 87.6062 295.133 93.1507 295.133 99.9903C295.133 106.83 300.673 112.374 307.507 112.374Z\"\n    fill=\"black\"\n  />\n  <path\n    d=\"M305.674 113.75C312.507 113.75 318.047 108.206 318.047 101.366C318.047 94.5267 312.507 88.9822 305.674 88.9822C298.84 88.9822 293.3 94.5267 293.3 101.366C293.3 108.206 298.84 113.75 305.674 113.75Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M243.806 85.3128H226.391V91.7342H243.806V85.3128Z\"\n    fill=\"#3F3D56\"\n  />\n  <path d=\"M253.43 146.316H236.015V152.737H253.43V146.316Z\" fill=\"#3F3D56\" />\n  <path\n    d=\"M320.339 170.167H236.015V158.241H320.339V170.167ZM236.932 169.25H319.422V159.159H236.932V169.25Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M315.756 196.311H232.349V207.319H315.756V196.311Z\"\n    fill=\"#F0F0F0\"\n  />\n  <path d=\"M253.43 181.175H236.015V187.596H253.43V181.175Z\" fill=\"#3F3D56\" />\n  <path\n    d=\"M320.339 205.026H236.015V193.1H320.339V205.026ZM236.932 204.109H319.422V194.018H236.932V204.109Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M307.049 229.335H249.305V216.493H307.049V229.335ZM250.222 228.418H306.132V217.41H250.222V228.418Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M318.047 165.58C318.047 166.524 317.756 167.446 317.213 168.218C316.671 168.991 315.903 169.577 315.015 169.896C314.128 170.216 313.163 170.253 312.253 170.004C311.343 169.754 310.532 169.23 309.931 168.502L309.927 168.497C309.489 167.966 309.176 167.342 309.012 166.672C308.848 166.003 308.837 165.305 308.979 164.631C309.122 163.956 309.414 163.323 309.835 162.777C310.256 162.231 310.794 161.788 311.41 161.479C312.026 161.17 312.703 161.005 313.392 160.994C314.081 160.983 314.763 161.128 315.388 161.418C316.013 161.708 316.564 162.134 317.002 162.667C317.439 163.199 317.751 163.824 317.914 164.493C317.914 164.494 317.915 164.494 317.915 164.495C317.915 164.495 317.915 164.496 317.916 164.496C317.916 164.497 317.917 164.497 317.917 164.497C317.918 164.498 317.918 164.498 317.919 164.498C318.004 164.852 318.047 165.216 318.047 165.58V165.58Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    opacity=\"0.1\"\n    d=\"M318.047 165.58C318.047 166.524 317.756 167.446 317.213 168.218C316.671 168.991 315.903 169.577 315.015 169.896C314.127 170.216 313.163 170.253 312.253 170.004C311.343 169.754 310.532 169.23 309.931 168.502L309.927 168.497C309.842 168.143 309.799 167.78 309.798 167.415C309.798 166.471 310.09 165.549 310.632 164.777C311.175 164.005 311.942 163.419 312.83 163.099C313.718 162.779 314.683 162.742 315.593 162.991C316.503 163.241 317.313 163.765 317.914 164.493C317.914 164.494 317.914 164.494 317.915 164.495C317.915 164.496 317.915 164.496 317.916 164.496C317.916 164.497 317.917 164.497 317.917 164.497C317.918 164.498 317.918 164.498 317.919 164.498C318.004 164.852 318.047 165.216 318.047 165.58V165.58Z\"\n    fill=\"black\"\n  />\n  <path\n    d=\"M315.298 172.919C317.829 172.919 319.88 170.865 319.88 168.332C319.88 165.799 317.829 163.746 315.298 163.746C312.767 163.746 310.715 165.799 310.715 168.332C310.715 170.865 312.767 172.919 315.298 172.919Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M318.047 200.439C318.047 201.383 317.756 202.305 317.213 203.077C316.671 203.85 315.903 204.436 315.015 204.755C314.128 205.075 313.163 205.112 312.253 204.863C311.343 204.613 310.532 204.089 309.931 203.361L309.927 203.356C309.489 202.825 309.176 202.201 309.012 201.531C308.848 200.862 308.837 200.164 308.979 199.49C309.122 198.815 309.414 198.182 309.835 197.636C310.256 197.09 310.794 196.647 311.41 196.338C312.026 196.029 312.703 195.864 313.392 195.853C314.081 195.842 314.763 195.987 315.388 196.277C316.013 196.567 316.564 196.993 317.002 197.526C317.439 198.058 317.751 198.683 317.914 199.352C317.914 199.353 317.915 199.353 317.915 199.354C317.915 199.355 317.915 199.355 317.916 199.355C317.916 199.356 317.917 199.356 317.917 199.356C317.918 199.357 317.918 199.357 317.919 199.357C318.004 199.711 318.047 200.075 318.047 200.439V200.439Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    opacity=\"0.1\"\n    d=\"M318.047 200.439C318.047 201.383 317.756 202.305 317.213 203.077C316.671 203.85 315.903 204.436 315.015 204.755C314.127 205.075 313.163 205.112 312.253 204.863C311.343 204.613 310.532 204.089 309.931 203.361L309.927 203.356C309.842 203.002 309.799 202.638 309.798 202.274C309.798 201.33 310.09 200.408 310.632 199.636C311.175 198.864 311.942 198.278 312.83 197.958C313.718 197.638 314.683 197.601 315.593 197.85C316.503 198.1 317.313 198.624 317.914 199.352C317.914 199.353 317.914 199.353 317.915 199.354C317.915 199.354 317.915 199.355 317.916 199.355C317.916 199.356 317.917 199.356 317.917 199.356C317.918 199.357 317.918 199.357 317.919 199.357C318.004 199.711 318.047 200.075 318.047 200.439V200.439Z\"\n    fill=\"black\"\n  />\n  <path\n    d=\"M315.298 207.778C317.829 207.778 319.88 205.724 319.88 203.191C319.88 200.658 317.829 198.605 315.298 198.605C312.767 198.605 310.715 200.658 310.715 203.191C310.715 205.724 312.767 207.778 315.298 207.778Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M238.306 22.0162H214.476V45.8671H238.306V22.0162Z\"\n    fill=\"#F0F0F0\"\n  />\n  <path\n    d=\"M307.507 39.4457C306.419 39.4457 305.356 39.1229 304.452 38.5181C303.547 37.9133 302.842 37.0537 302.426 36.048C302.01 35.0422 301.901 33.9356 302.113 32.8679C302.325 31.8002 302.849 30.8195 303.618 30.0497C304.387 29.28 305.367 28.7557 306.434 28.5434C307.501 28.331 308.606 28.44 309.611 28.8566C310.616 29.2732 311.475 29.9786 312.079 30.8838C312.684 31.7889 313.006 32.8531 313.006 33.9417C313.005 35.4009 312.425 36.8 311.394 37.8318C310.363 38.8637 308.965 39.4441 307.507 39.4457V39.4457ZM307.507 29.355C306.6 29.355 305.714 29.624 304.961 30.128C304.207 30.6319 303.62 31.3483 303.273 32.1864C302.926 33.0245 302.835 33.9467 303.012 34.8365C303.189 35.7262 303.625 36.5435 304.266 37.185C304.907 37.8264 305.724 38.2633 306.613 38.4402C307.502 38.6172 308.423 38.5264 309.261 38.1792C310.098 37.8321 310.814 37.2442 311.317 36.4899C311.821 35.7356 312.09 34.8488 312.09 33.9417C312.088 32.7256 311.605 31.5598 310.746 30.6999C309.887 29.84 308.722 29.3563 307.507 29.355V29.355Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M186.521 116.044H174.605V104.118H186.521V116.044ZM175.522 115.126H185.604V105.036H175.522V115.126Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M368 205.026H356.085V193.1H368V205.026ZM357.001 204.109H367.083V194.018H357.001V204.109Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M132.903 125.064L134.948 126.166L141.905 129.92L153.138 135.977L159.684 123.821C160.3 122.679 160.686 121.426 160.818 120.135C160.95 118.844 160.827 117.539 160.455 116.295C160.082 115.052 159.469 113.894 158.649 112.888C157.829 111.882 156.819 111.048 155.677 110.433C153.235 109.114 150.439 108.604 147.689 108.977C144.94 109.351 142.38 110.588 140.379 112.51L140.375 112.514C139.39 113.461 138.559 114.555 137.912 115.759L132.903 125.064Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M163.561 249.029L162.189 264.138L157.042 264.824L153.611 247.656L163.561 249.029Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M155.67 264.824C155.67 264.824 162.188 261.391 163.561 264.138C163.561 264.138 162.531 272.379 166.648 273.409C170.765 274.439 172.481 281.65 166.648 282.337C160.816 283.023 157.042 280.963 154.984 280.963C152.925 280.963 154.984 273.752 154.984 273.752L155.67 264.824Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M122.048 249.029L123.42 264.138L128.566 264.824L131.997 247.656L122.048 249.029Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M129.939 264.824C129.939 264.824 123.42 261.391 122.048 264.138C122.048 264.138 123.077 272.379 118.96 273.409C114.843 274.439 113.128 281.65 118.96 282.337C124.792 283.023 128.566 280.963 130.625 280.963C132.683 280.963 130.625 273.752 130.625 273.752L129.939 264.824Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M150.18 127.818C155.107 127.818 159.101 123.821 159.101 118.89C159.101 113.96 155.107 109.963 150.18 109.963C145.254 109.963 141.26 113.96 141.26 118.89C141.26 123.821 145.254 127.818 150.18 127.818Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M121.705 136.402L128.909 147.734L137.486 147.047L151.553 148.077C151.553 148.077 152.881 145.419 153.965 142.834C154.558 141.543 155.015 140.193 155.327 138.806C155.67 136.402 150.867 133.999 150.867 133.999C150.867 133.999 150.678 133.964 150.362 133.889C149.944 133.789 149.299 133.625 148.592 133.384C146.997 132.842 145.079 131.921 144.691 130.565C144.005 128.161 149.151 124.728 149.151 124.728L142.976 118.89C142.976 118.89 137.49 126.517 130.827 128.254C130.441 128.356 130.049 128.437 129.654 128.495C129.633 128.498 129.616 128.501 129.595 128.505C122.391 129.535 121.705 136.402 121.705 136.402Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M125.479 133.312L121.705 136.402C121.705 136.402 118.617 151.168 119.646 155.288C120.675 159.408 119.303 163.186 119.303 163.872C119.303 164.559 116.215 190.312 116.215 190.312C116.215 190.312 110.04 204.047 116.558 202.674C123.077 201.3 120.675 187.565 120.675 187.565L128.566 163.529V143.27L125.479 133.312Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M152.582 136.059L155.327 138.119L156.699 166.963L166.992 191.686C166.992 191.686 174.539 203.704 169.736 204.047C164.933 204.391 161.845 191.686 161.845 191.686L152.582 167.993L151.21 144.987L152.582 136.059Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M135.428 138.119C135.428 138.119 142.29 142.927 153.268 141.21C153.268 141.21 156.356 147.39 154.641 150.824C152.925 154.258 156.699 162.499 157.385 163.529C158.071 164.559 165.962 185.848 168.707 208.854C171.452 231.86 178.999 247.656 172.481 249.716C165.962 251.776 152.582 254.18 151.21 252.12C149.837 250.059 147.779 198.897 147.779 198.897L144.005 218.469C144.005 218.469 149.151 251.776 145.377 252.463C141.603 253.15 117.931 251.089 118.617 246.969C119.303 242.848 126.165 221.216 126.165 221.216C126.165 221.216 125.822 177.951 132.683 169.71C132.683 169.71 135.428 165.246 131.654 159.408C127.88 153.571 128.223 144.3 128.223 144.3C128.223 144.3 130.968 144.3 135.428 138.119Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M129.654 128.494L135.428 141.21L136.8 140.523L130.827 128.254L129.654 128.494Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M148.592 133.384L152.925 142.927L153.965 142.834L153.611 141.21L150.362 133.889C149.944 133.789 149.299 133.625 148.592 133.384Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M134.948 126.166C135.277 127.229 135.913 128.17 136.775 128.872C137.637 129.574 138.687 130.006 139.793 130.114C140.899 130.222 142.013 130.001 142.994 129.478C143.975 128.955 144.78 128.155 145.309 127.176C140.969 121.497 144.691 117.929 151.741 115.23C152.273 114.243 152.498 113.121 152.39 112.006C152.282 110.891 151.845 109.833 151.134 108.967C149.191 108.718 147.217 108.907 145.356 109.52C143.495 110.133 141.794 111.155 140.379 112.51L140.375 112.514L135.366 121.812C135.009 122.473 134.789 123.199 134.717 123.947C134.645 124.695 134.723 125.449 134.948 126.166V126.166Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M144.863 121.981C145.526 121.981 146.063 121.058 146.063 119.92C146.063 118.783 145.526 117.86 144.863 117.86C144.199 117.86 143.662 118.783 143.662 119.92C143.662 121.058 144.199 121.981 144.863 121.981Z\"\n    fill=\"#FFB8B8\"\n  />\n  <path\n    d=\"M148.441 116.559L158.754 121.236L160.645 117.06C160.319 115.534 159.637 114.107 158.655 112.895L151.556 109.678L148.441 116.559Z\"\n    fill=\"#2F2E41\"\n  />\n  <path\n    d=\"M173.23 208.695C175.761 208.695 177.813 206.642 177.813 204.109C177.813 201.575 175.761 199.522 173.23 199.522C170.699 199.522 168.648 201.575 168.648 204.109C168.648 206.642 170.699 208.695 173.23 208.695Z\"\n    fill=\"#0804B8\"\n  />\n  <path\n    d=\"M26.1021 235.962C27.7562 235.962 29.0971 234.62 29.0971 232.964C29.0971 231.309 27.7562 229.967 26.1021 229.967C24.448 229.967 23.1071 231.309 23.1071 232.964C23.1071 234.62 24.448 235.962 26.1021 235.962Z\"\n    fill=\"#FF6584\"\n  />\n  <path\n    d=\"M41.2339 248.587H40.3174V282.717H41.2339V248.587Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M40.7757 253.414C43.4391 253.414 45.5981 251.253 45.5981 248.587C45.5981 245.921 43.4391 243.761 40.7757 243.761C38.1124 243.761 35.9533 245.921 35.9533 248.587C35.9533 251.253 38.1124 253.414 40.7757 253.414Z\"\n    fill=\"#3F3D56\"\n  />\n  <path\n    d=\"M40.7757 269.622C40.7757 269.622 40.0868 254.793 25.964 256.516Z\"\n    fill=\"#3F3D56\"\n  />\n</svg>";

var LogoDark = "<svg width=\"102.27\" height=\"32\" viewBox=\"0 0 388 121\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M96.0869 0.00292657L0 95.6033L6.8079 102.377L102.895 6.77635L96.0869 0.00292657Z\" fill=\"#181E26\"/>\n<path d=\"M32.1895 15.9653C32.1895 24.7882 25.0108 31.9306 16.143 31.9306C7.27515 31.9306 0.0964407 24.7882 0.0964407 15.9653C0.0119853 7.14236 7.19069 0 16.143 0C25.0108 0 32.1895 7.14236 32.1895 15.9653Z\" fill=\"#181E26\"/>\n<path d=\"M172.217 103.69C161.66 103.69 154.312 97.5562 154.312 88.7333C154.312 76.8854 166.812 73.1042 188.432 70.6673V69.9111C188.432 60.2479 182.521 58.2312 177.538 58.2312C170.95 58.2312 166.896 61.6764 166.559 67.7264V68.2305H156.677L156.762 67.6423C157.691 56.2146 167.91 50.2486 177.538 50.2486C184.548 50.2486 189.615 51.9292 192.993 55.2903C196.456 58.8194 198.145 64.1132 198.145 71.5076L198.06 83.1035C197.976 91.0021 198.398 96.968 199.327 101.926L199.412 102.598H189.699L189.615 102.178C189.361 100.665 189.193 99.0687 189.024 96.884C185.561 101.422 180.071 103.69 172.217 103.69ZM189.108 78.3979C173.737 79.9944 164.869 82.1792 164.869 88.4812C164.869 93.0187 168.417 95.8757 174.075 95.8757C179.649 95.8757 189.108 93.943 189.108 80.9187V78.3979Z\" fill=\"#181E26\"/>\n<path d=\"M234.46 103.69C227.535 103.69 222.045 101.085 218.498 96.2118V102.514H208.87V33.7792H218.498V57.8111C222.045 52.9375 227.535 50.3327 234.46 50.3327C245.101 50.3327 256.587 58.6514 256.587 76.9695C256.587 95.2875 245.101 103.69 234.46 103.69ZM232.264 58.7354C225.423 58.7354 218.076 63.525 218.076 77.0535C218.076 90.582 225.423 95.3715 232.264 95.3715C240.794 95.3715 246.115 88.3972 246.115 77.0535C246.199 65.7097 240.879 58.7354 232.264 58.7354Z\" fill=\"#181E26\"/>\n<path d=\"M290.369 103.606C283.444 103.606 277.954 101.001 274.407 96.1278V102.43H264.779V33.7792H274.407V57.8111C277.954 52.9375 283.444 50.3326 290.369 50.3326C301.011 50.3326 312.497 58.6514 312.497 76.9695C312.497 95.2875 301.011 103.606 290.369 103.606ZM288.258 58.7354C281.417 58.7354 274.069 63.525 274.069 77.0535C274.069 90.582 281.417 95.3715 288.258 95.3715C296.788 95.3715 302.109 88.3972 302.109 77.0535C302.109 65.7097 296.788 58.7354 288.258 58.7354Z\" fill=\"#181E26\"/>\n<path d=\"M330.486 33.7792H320.858V102.43H330.486V33.7792Z\" fill=\"#181E26\"/>\n<path d=\"M364.099 103.69C348.728 103.69 338.847 93.1868 338.847 76.9695C338.847 61.3403 349.15 50.4167 363.845 50.4167C370.686 50.4167 376.598 52.8535 380.905 57.559C385.973 62.9368 388.506 71.0035 387.915 79.7424V80.2466H349.15C349.741 90.4979 357.342 95.2035 364.099 95.2035C370.686 95.2035 375.078 92.5986 377.358 87.2209L377.527 86.8848H387.409L387.24 87.557C384.622 97.3042 375.5 103.69 364.099 103.69ZM377.781 71.8438C377.358 65.4577 372.375 58.7354 363.845 58.7354C355.484 58.7354 350.079 63.609 349.235 71.8438H377.781Z\" fill=\"#181E26\"/>\n<path d=\"M114.195 121L123.486 98.4806L102.963 51.257H113.52L128.3 86.8847L141.981 51.257H152.2L124.246 121H114.195Z\" fill=\"#181E26\"/>\n</svg>";

var LogoWhite = "<svg width=\"102.27\" height=\"32\" viewBox=\"0 0 388 121\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M96.0869 0.00295553L0 96.0956L6.8079 102.904L102.895 6.81126L96.0869 0.00295553Z\" fill=\"white\"/>\n<path d=\"M32.1895 16.0475C32.1895 24.9158 25.0108 32.095 16.143 32.095C7.27515 32.095 0.0964407 24.9158 0.0964407 16.0475C0.0119853 7.17914 7.19069 0 16.143 0C25.0108 0 32.1895 7.17914 32.1895 16.0475Z\" fill=\"white\"/>\n<path d=\"M172.217 104.224C161.66 104.224 154.312 98.0586 154.312 89.1903C154.312 77.2814 166.812 73.4806 188.432 71.0313V70.2711C188.432 60.5582 182.521 58.5311 177.538 58.5311C170.95 58.5311 166.896 61.994 166.559 68.0752V68.5819H156.677L156.762 67.9907C157.691 56.5041 167.91 50.5074 177.538 50.5074C184.548 50.5074 189.615 52.1966 192.993 55.575C196.456 59.1224 198.145 64.4434 198.145 71.8759L198.06 83.5314C197.976 91.4707 198.398 97.4674 199.327 102.451L199.412 103.126H189.699L189.615 102.704C189.361 101.184 189.193 99.5789 189.024 97.3829C185.561 101.944 180.071 104.224 172.217 104.224ZM189.108 78.8016C173.737 80.4064 164.869 82.6024 164.869 88.9369C164.869 93.4978 168.417 96.3694 174.075 96.3694C179.649 96.3694 189.108 94.4268 189.108 81.3355V78.8016Z\" fill=\"white\"/>\n<path d=\"M234.46 104.224C227.535 104.224 222.045 101.606 218.498 96.7073V103.042H208.87V33.9531H218.498V58.1088C222.045 53.2101 227.535 50.5918 234.46 50.5918C245.101 50.5918 256.587 58.9534 256.587 77.3658C256.587 95.7782 245.101 104.224 234.46 104.224ZM232.264 59.0379C225.423 59.0379 218.076 63.8521 218.076 77.4503C218.076 91.0484 225.423 95.8627 232.264 95.8627C240.794 95.8627 246.115 88.8524 246.115 77.4503C246.199 66.0481 240.879 59.0379 232.264 59.0379Z\" fill=\"white\"/>\n<path d=\"M290.369 104.14C283.444 104.14 277.954 101.521 274.407 96.6228V102.957H264.779V33.9531H274.407V58.1088C277.954 53.2101 283.444 50.5918 290.369 50.5918C301.011 50.5918 312.497 58.9534 312.497 77.3658C312.497 95.7782 301.011 104.14 290.369 104.14ZM288.258 59.0379C281.417 59.0379 274.069 63.8521 274.069 77.4503C274.069 91.0484 281.417 95.8627 288.258 95.8627C296.788 95.8627 302.109 88.8524 302.109 77.4503C302.109 66.0481 296.788 59.0379 288.258 59.0379Z\" fill=\"white\"/>\n<path d=\"M330.486 33.9531H320.858V102.957H330.486V33.9531Z\" fill=\"white\"/>\n<path d=\"M364.099 104.224C348.728 104.224 338.847 93.6666 338.847 77.3658C338.847 61.6561 349.15 50.6763 363.845 50.6763C370.686 50.6763 376.598 53.1256 380.905 57.8554C385.973 63.2609 388.506 71.3691 387.915 80.153V80.6597H349.15C349.741 90.9639 357.342 95.6937 364.099 95.6937C370.686 95.6937 375.078 93.0754 377.358 87.67L377.527 87.3321H387.409L387.24 88.0078C384.622 97.8052 375.5 104.224 364.099 104.224ZM377.781 72.2137C377.358 65.7947 372.375 59.0379 363.845 59.0379C355.484 59.0379 350.079 63.9366 349.235 72.2137H377.781Z\" fill=\"white\"/>\n<path d=\"M114.195 121.623L123.486 98.9877L102.963 51.5209H113.52L128.3 87.3321L141.981 51.5209H152.2L124.246 121.623H114.195Z\" fill=\"white\"/>\n</svg>";

const Illustrations = {
  SignUp,
  SignIn,
  LogoDark,
  LogoWhite
};

var arrowLeft = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19 12.4142L5 12.4142\" stroke=\"#67718B\" stroke-linecap=\"round\"/>\n<path d=\"M10.3433 6.68628L4.68641 12.3431L10.3433 18\" stroke=\"#67718B\" stroke-linecap=\"round\"/>\n</svg>";

const BackButton = ({
  label,
  divider,
  backClickEvent
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "primary-header-back",
    onClick: backClickEvent
  }, /*#__PURE__*/React.createElement("div", {
    className: "primary-header-back__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: arrowLeft
  })), /*#__PURE__*/React.createElement("span", {
    className: "primary-header-back__text"
  }, label), divider && /*#__PURE__*/React.createElement("div", {
    className: "primary-header-back__divider"
  }, "/"));
};

const PrimaryHeader = ({
  title,
  backLabel,
  backClickEvent = () => {},
  showLogo,
  showLogoDivider,
  showBackDivider = true,
  leftComponent,
  centerComponent,
  rightComponent
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "primary-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "primary-header__left-section"
  }, title && !showLogo && /*#__PURE__*/React.createElement("span", {
    className: "primary-header__title"
  }, title), backLabel && /*#__PURE__*/React.createElement(BackButton, {
    label: backLabel,
    divider: showBackDivider,
    backClickEvent
  }), showLogo && /*#__PURE__*/React.createElement("img", {
    src: Illustrations.LogoDark,
    alt: "Hey Yabble Logo",
    className: "primary-header__logo"
  }), showLogoDivider && /*#__PURE__*/React.createElement("div", {
    className: "primary-header__logo-divider"
  }), leftComponent && leftComponent()), /*#__PURE__*/React.createElement("div", {
    className: "primary-header__center-section"
  }, centerComponent && centerComponent()), /*#__PURE__*/React.createElement("div", {
    className: "primary-header__right-section"
  }, rightComponent && rightComponent()));
};

const PrimaryLayoutContainer = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container__background"
  }, /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container__rotate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container__section1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container__section2"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "primary-layout-container__content"
  }, children));
};

const Divider = ({
  marginTop = '32px',
  marginBottom = '32px'
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "divider",
    style: {
      marginBottom,
      marginTop
    }
  });
};

const defaultOptions = [{
  name: 'Surveys',
  onClick: () => {}
}, {
  name: 'Hey Yabble',
  onClick: () => {}
}, {
  name: 'MyPanel',
  onClick: () => {}
}];

const LeftMenu = ({
  options = defaultOptions,
  selectedIndex = 0,
  setSelectedIndex = () => {}
}) => {
  const onClick = (index, action) => {
    setSelectedIndex(index);
    action();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "left-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left-menu__header"
  }, /*#__PURE__*/React.createElement("img", {
    src: Illustrations.LogoWhite,
    alt: "Hey Yabble Logo",
    className: "left-menu__logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "left-menu__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "left-menu__content"
  }, options.map((option, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onClick(i, option.onClick),
    className: `left-menu__button ${i === selectedIndex ? 'left-menu__route--selected' : 'left-menu__route'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `left-menu__line ${i === selectedIndex && 'left-menu__line--selected'}`
  }), /*#__PURE__*/React.createElement("span", null, option.name)))));
};

const Avatar = ({
  name
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar__text"
  }, getNameInitials(name)));
};

export { Avatar, Badge, Card, CircleLoading, DangerButtonRectangle, DatePickerInput, Divider, DotsLoading, Face, FieldError, Icon, Label, LeftMenu, Loader, MailButton, Menu, Modal, NestedMenu, NestedMenuItemComp, Popup, PopupList, PrimaryButtonRectangle, PrimaryButtonRound, PrimaryHeader, PrimaryIconOnlyButton, PrimaryInput, PrimaryLayoutContainer, PrimaryLinkButton, RedirectButton, Response, SecondaryButtonRectangle, SecondaryButtonRound, SecondaryIconOnlyButton, Select, SubtleButton, SubtleIconOnlyButton, SubtleLinkButton, TertiaryIconOnlyButton, TextArea, applyClassNameIf, applyVendorPrefix, formatClassName, formatCurrency, formatCurrencyEvents, getNameInitials, sortTableData };
