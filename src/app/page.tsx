"use client";
import Hero from "@/components/Hero/Hero";
import HorizontalCarousel from "@/components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "@/components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "@/components/Home/ProductHighlight";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { getRandomProducts } from "@/services/product";

export default async function Home() {
    const { t } = useTranslation();
    const { data: session } = useSession();

    try {
    const products = await getRandomProducts(5);
  } catch (error) {
    console.error("Error fetching random products:", error);
  }

    useEffect(() => {
        console.log("session", session);
    }, [session]);

  return (
    <main className="">
      <Hero></Hero>
      <section>
        <SectionTitle></SectionTitle>
        <div className="container max-w-mobileContainer md:max-w-desktopContainer">
          <HorizontalCarousel></HorizontalCarousel>
          <div>
            {" "}
            <Link href={"/"} className={"py-small flex justify-center italic"}>
              {t("see_all_categories")}
            </Link>
          </div>
        </div>
      </section>
      <ProductHighlight />
    </main>
  );
}
