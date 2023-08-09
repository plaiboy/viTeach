import React from "react";

const sizeClasses = {
  txtInterRegular64: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular15Lightblue800: "font-inter font-normal",
  txtInterRegular24WhiteA70001: "font-inter font-normal",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular39: "font-normal font-roboto",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoRegular14Gray700: "font-normal font-roboto",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular35: "font-inter font-normal",
  txtInterRegular15Bluegray900: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
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
