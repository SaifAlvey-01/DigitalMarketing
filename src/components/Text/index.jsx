import React from "react";

const sizeClasses = {
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtPoppinsMedium18Cyan900: "font-medium font-poppins",
  txtPoppinsSemiBold60: "font-poppins font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsMedium14IndigoA200: "font-medium font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold48Deeporange600: "font-poppins font-semibold",
  txtPoppinsMedium18Deeporange600: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsRegular14IndigoA200: "font-normal font-poppins",
  txtPoppinsRegular14Black9007f: "font-normal font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsRegular14WhiteA700b2: "font-normal font-poppins",
  txtPoppinsRegular14WhiteA7007f: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
