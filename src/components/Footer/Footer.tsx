"use client";
import React from "react";
import Newsletter from "@/components/Footer/Newsletter/Newsletter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className={"bg-opal text-offWhiteTint pt-medium"}>
        <div className={"border-y border-offWhiteTint grid grid-cols-2"}>
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
        <div className={"border-b border-offWhiteTint grid grid-cols-2"}>
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
        <div className="py-medium border-b border-offWhiteTint flex justify-center">
          <p className={"logo-text-footer logo-text-footer"}>airneis</p>
        </div>
        <div className="py-medium flex justify-center">
          <p className={"italic"}>© ÀIRNESS 2023 | PROJET DEVOPS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
