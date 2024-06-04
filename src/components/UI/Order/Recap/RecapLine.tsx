import React from "react";

const RecapLine = () => {
  return (
    <div className={"[&:not(:last-child)]:border-b border-oyster"}>
      <div className={"flex justify-between flex-row p-4"}>
        <p className={"font-bold"}>2022/10/03 - 3912309</p>
        <p className={"italic"}>In progress</p>
      </div>
      <div className={"flex justify-between flex-row p-4"}>
        <p>5 articles</p>
        <p>1 200€</p>
      </div>
    </div>
  );
};

export default RecapLine;
