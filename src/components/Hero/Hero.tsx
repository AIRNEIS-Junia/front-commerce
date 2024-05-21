import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <header data-testid={"hero"} className={"h-[700px] relative w-100"}>
      <Image
        src={"/images/home/Hero.webp"}
        fill
        className={"object-cover"}
        alt={""}
      />
    </header>
  );
};

export default Hero;
