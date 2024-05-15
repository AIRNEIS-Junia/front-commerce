import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className={"bg-beige px-8 py-12 rounded-medium flex flex-col"}>
      <h1 className={"text-center mb-12"}>Thank you!</h1>
      <p>
        Your order have been register under the command number DZQ8YF8Q . You
        can track your order progress on your profile in the orders section. Our
        team is working to deliver your order to you as quickly as possible! See
        you soon on àirneis.com
      </p>
      <Link className={"btn btn-black btn-dark text-center mt-16"} href={"/"}>
        CONTINUE SHOPPING
      </Link>
    </div>
  );
};

export default Page;
