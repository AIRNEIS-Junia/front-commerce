import React from "react";

const SectionTitle = (props: { title: string }) => {
  return (
    <div className={"py-small border-b border-oyster text-center "}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
