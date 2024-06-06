import React from "react";
const Page = async () => {
  return (
    <div
      className={
        "max-w-mobileContainer lg:max-w-desktopContainer mx-auto relative px-4"
      }
    >
      <div className={"grid lg:grid-cols-[2fr_1fr] my-20 gap-16"}>
        <div>
          <h2 className={"mb-8 pb-2 border-b border-oyster text-4xl"}>
            Adresses de livraisons enregistrées
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
