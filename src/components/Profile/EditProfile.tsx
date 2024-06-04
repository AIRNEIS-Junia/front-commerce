import React, { useEffect } from "react";
import Image from "next/image";
import ProfileForm from "@/components/UI/Form/ProfileForm";
import { EditUserInput } from "../../../types/User";
import { useTranslation } from "react-i18next";

const EditProfile = ({ user }: { user: any }) => {
  const { t } = useTranslation();

  return (
    <div className={"bg-beige p-4 lg:p-8"}>
      <div className={"flex justify-between items-center mb-8"}>
        <h1 className={"text-3xl"}>{t("your_profile")}</h1>
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
