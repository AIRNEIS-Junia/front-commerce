import React from "react";
import Image from "next/image";

const EditProfile = () => {
  return (
    <div className={"bg-beige px-16 py-8"}>
      <div className={"flex justify-between items-center"}>
        <h1 className={"text-3xl"}>Your Profile</h1>
        <div
          className={"h-[50px] w-[50px] relative rounded-full overflow-hidden"}
        >
          <Image
            src={"/images/home/Hero.webp"}
            alt={"Profile"}
            fill
            className={"object-cover"}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
