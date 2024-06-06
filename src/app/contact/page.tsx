import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/Section/SectionTitle";
import ContactForm from "@/components/UI/Form/ContactForm";

const Page = () => {
  return (
    <div className={"lg:grid lg:grid-cols-2 lg: lg:h-screen lg:items-center"}>
      <div className={"h-[375px] lg:h-full relative w-100"}>
        <Image
          src={"/images/contact/contact.webp"}
          fill
          className={"object-cover"}
          alt={""}
        />
      </div>
      <div className={"container lg:w-2/3 lg:mx-auto"}>
        <SectionTitle title={"Rester en contact"} />
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
