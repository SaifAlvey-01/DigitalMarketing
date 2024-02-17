import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[24px]" };
const variants = {
  fill: {
    indigo_A200: "bg-indigo-A200 text-white-A700",
    yellow_700: "bg-yellow-700",
    white_A700: "bg-white-A700 text-indigo-A200",
  },
};
const sizes = { xs: "p-[13px]", sm: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_A200", "yellow_700", "white_A700"]),
};

export { Button };
