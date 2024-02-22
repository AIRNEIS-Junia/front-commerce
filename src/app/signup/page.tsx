import React from "react";
import SignupForm from "@/components/UI/Form/SignupForm";

const Page = () => {
  return (
    <div className={"my-medium w-screen flex items-center"}>
      <div className={"w-[400px] mx-auto"}>
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
