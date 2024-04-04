import React from "react";
import SignupForm from "@/components/UI/Form/SignupForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1 className={"mb-16 text-center"}>Sign up</h1>
      <SignupForm />
    </>
  );
};

export default Page;
