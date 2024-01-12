import React from "react";

const SectionTitle = (props: { title: string }) => {
  return (
    <div className={"py-small border-b border-oyster text-center "}>
      <div className={"max-w-mobileContainer mx-auto"}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
