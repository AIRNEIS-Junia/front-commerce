import React from "react";
import Image from "next/image";
import Input from "@/components/UI/Input";

const Newsletter = () => {
  return (
    <div className={"h-[700px] relative w-full"}>
      <Image
        src={"/images/footer/Newsletter.webp"}
        fill
        className={"object-cover"}
        alt={""}
      />
      <div
        className={
          "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhiteTint max-w-mobileContainer w-full mx-auto space-y-16"
        }
      >
        <h3>Be part of our club for discount</h3>
        <Input placeholder={"YOUR EMAIL"} />
      </div>
    </div>
  );
};

export default Newsletter;
