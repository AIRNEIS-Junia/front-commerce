import React from "react";
import Image from "next/image";
import Link from "next/link";

const HorinzontalCarouselItem = (props: {
  image: string;
  alt: string;
  name: string;
  link: string;
}) => {
  if (!props) {
    return null;
  }
  return (
    <Link href={`${props.link}`} className={"p-[8px]"}>
      <div className={"relative aspect-square"}>
        <Image
          fill
          src={props.image}
          className={"object-cover"}
          alt={`${props.alt}`}
        />
      </div>
      <p className={"mt-[8px]"}>{props.name}</p>
    </Link>
  );
};

export default HorinzontalCarouselItem;
