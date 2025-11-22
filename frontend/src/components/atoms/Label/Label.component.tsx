import React from "react";

const Label = ({
  className,
  htmlFor,
  ...props
}: React.ComponentProps<"label">) => {
  const defaultClassName =
    "flex items-center text-sm leading-none font-medium text-gray-900 mb-2";

  const finalClassName = className ? className : defaultClassName;
  return (
    <label htmlFor={htmlFor} {...props} className={finalClassName}>
      {props.children}
    </label>
  );
};

export default Label;
