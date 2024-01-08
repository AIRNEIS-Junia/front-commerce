import React from "react";

const Input = (props: { placeholder: string | undefined }) => {
  return (
    <input
      className={
        "w-full border border-offWhiteTint rounded-[8px] p-[16px] bg-transparent color-white placeholder:text-offWhiteTint placeholder:text-sm placeholder:italic"
      }
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
