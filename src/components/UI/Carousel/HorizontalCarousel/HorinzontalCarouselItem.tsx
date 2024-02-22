import React from "react";
import Image from "next/image";
import Link from "next/link";

const HorinzontalCarouselItem = (props: {
  image: string;
  alt: string;
  name: string;
  link: string;
}) => {
  return (
    <Link href={`${props.link}`} className={"aspect-square p-[8px]"}>
      <div className={"aspect-square relative"}>
        <Image
          fill
          src={props.image}
          className={"object-cover"}
          alt={`${props.alt}`}
        />
      </div>
      <p className={"mt-[8px]"}>NATIVE IRON CHAIR</p>
    </Link>
  );
};

export default HorinzontalCarouselItem;
