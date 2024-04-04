"use client";
import Hero from "@/components/Hero/Hero";
import HorizontalCarousel from "@/components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "@/components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "@/components/Home/ProductHighlight";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  return (
    <main className="">
      <Hero></Hero>
      <section>
        <SectionTitle title={"Enjoy our feature categories"}></SectionTitle>
        <div className="container max-w-mobileContainer md:max-w-desktopContainer">
          <HorizontalCarousel></HorizontalCarousel>
          <div>
            {" "}
            <Link href={"/"} className={"py-small flex justify-center italic"}>
              SHOP ALL
            </Link>
          </div>
        </div>
      </section>
      <ProductHighlight />
    </main>
  );
}
