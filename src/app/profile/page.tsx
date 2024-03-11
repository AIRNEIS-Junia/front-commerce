import React from "react";
import Link from "next/link";
import EditProfile from "@/components/Profile/EditProfile";
import ManageShipping from "@/components/Profile/ManageShipping";

interface SearchParamProps {
  searchParams: Record<string, string | undefined>;
}

const Page = async ({ searchParams }: { searchParams: SearchParamProps }) => {
  const fetchAddresses = async (): Promise<void | Response> => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  return (
    <div
      className={
        "max-w-mobileContainer lg:max-w-desktopContainer mx-auto relative"
      }
    >
      <div className={"grid grid-cols-[2fr_1fr] my-20 gap-16"}>
        <div>
          <h2 className={"mb-8 pb-2 border-b border-oyster text-4xl"}>
            Register Shipping Address
          </h2>

          <div className={"flex space-x-4"}>
            <Link
              className={"btn btn-dark"}
              href={"/profile?createShipping=true"}
            >
              Create Shipping Address
            </Link>
            <Link
              className={"btn btn-dark"}
              href={`/profile?editShipping=true`}
            >
              Edit Shipping Address
            </Link>
          </div>
          <ManageShipping
            searchParams={searchParams}
            addresses={await fetchAddresses()}
          />
        </div>

        <EditProfile />
      </div>
    </div>
  );
};

export default Page;
