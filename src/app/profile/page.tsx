import React from "react";
import EditProfile from "@/components/Profile/EditProfile";
import ManageShipping from "@/components/Profile/ManageShipping";
import getAddressesByUser from "../../../lib/api-functions";

const Page = async () => {
  const addresses = await getAddressesByUser();

  return (
    <div
      className={
        "max-w-mobileContainer lg:max-w-desktopContainer mx-auto relative px-4"
      }
    >
      <div className={"grid grid-cols-[2fr_1fr] my-20 gap-16"}>
        <div>
          <h2 className={"mb-8 pb-2 border-b border-oyster text-4xl"}>
            Register Shipping Address
          </h2>

          <ManageShipping addresses={addresses} />
        </div>

        <EditProfile />
      </div>
    </div>
  );
};

export default Page;
