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
          "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhiteTint max-w-mobileContainer md:max-w-[600px] w-full mx-auto space-y-16 flex flex-col justify-center"
        }
      >
        <h2 className={"text-offWhiteTint text-center"}>
          Be part of our club for discount
        </h2>
        <Input className={"w-[75%]"} placeholder={"YOUR EMAIL"} />
      </div>
    </div>
  );
};

export default Newsletter;
