import React from "react";

const Input = (props: {
  placeholder: string | undefined;
  className: string;
}) => {
  return (
    <input
      className={`mx-auto border border-offWhiteTint rounded-[8px] p-[16px] bg-transparent color-white placeholder:text-offWhiteTint placeholder:text-sm placeholder:italic ${props.className}`}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
