import React from "react";
import Image from "next/image";
import ProfileForm from "@/components/UI/Form/ProfileForm";

const EditProfile = ({ user }: { user: any }) => {
  return (
    <div className={"bg-beige p-4 lg:p-8"}>
      <div className={"flex justify-between items-center mb-8"}>
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
      <ProfileForm user={user} />
    </div>
  );
};

export default EditProfile;
