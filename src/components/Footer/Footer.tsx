"use client";
import React from "react";
import Newsletter from "@/components/Footer/Newsletter/Newsletter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className={"bg-opal text-offWhiteTint"}>
        <div className={"h-[58px]"}></div>
        <div className={"border-y border-offWhiteTint grid grid-cols-2 "}>
          <div className={"border-r p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>SHOP</Link>
            <Link href={""}>Accueil</Link>
            <Link href={""}>Accueil</Link>
          </div>
          <div className={"p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>SHOP</Link>
            <Link href={""}>Accueil</Link>
            <Link href={""}>Accueil</Link>
          </div>
        </div>
        <div className={"border-b border-offWhiteTint grid grid-cols-2 "}>
          <div className={"border-r p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>SHOP</Link>
            <Link href={""}>Accueil</Link>
            <Link href={""}>Accueil</Link>
          </div>
          <div className={"p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>SHOP</Link>
            <Link href={""}>Accueil</Link>
            <Link href={""}>Accueil</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
