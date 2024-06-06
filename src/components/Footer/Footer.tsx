"use client";
import React from "react";
import Newsletter from "@/components/Footer/Newsletter/Newsletter";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className={"bg-opal text-offWhiteTint pt-medium"}>
        <div
          className={
            "border-y border-offWhiteTint grid grid-cols-2 md:grid-cols-4"
          }
        >
          <div className={"border-b lg:border-b-0 p-4 flex flex-col space-y-4"}>
            <Link href={"/"}>Accueil</Link>
            <Link href={"/search"}>Boutique</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div
            className={
              "border-l border-b lg:border-b-0 p-4 flex flex-col space-y-4"
            }
          >
            <p className={"text-offWhiteTint font-bold"}>Catégories</p>
            <Link href={`/category/rangement`}>Rangement</Link>
            <Link href={"/category/salon"}>Salon</Link>
          </div>
          <div className={"lg:border-l p-4 flex flex-col space-y-4"}>
            <p className={"text-offWhiteTint font-bold"}>Catégories</p>
            <Link href={"/category/bureau"}>Bureau</Link>
            <Link href={"/category/chambre"}>Chambre</Link>
          </div>
          <div className={"border-l p-4 flex flex-col space-y-4"}>
            <p className={"text-offWhiteTint font-bold"}>Catégories</p>
            <Link href={`#`}>Cuisine</Link>
            <Link href={"#"}>Jardin</Link>
          </div>
        </div>
        <div className="py-medium border-b border-offWhiteTint flex justify-center">
          <a href={"#"} className={"underline-none focus:outline-none"}>
            <p className={`${styles["logo-text-footer"]} logo-text-footer`}>
              airneis
            </p>
          </a>
        </div>
        <div className="py-medium flex justify-center">
          <p className={"italic"}>© ÀIRNESS 2023 | Projet Devops</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
