import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import HorizontalCarousel from "@/components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "@/components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "@/components/Home/ProductHighlight";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <section>
        <SectionTitle title={"Enjoy our feature categories"}></SectionTitle>
        <HorizontalCarousel></HorizontalCarousel>
        <Link href={"/"} className={"py-small flex justify-center italic"}>
          SHOP ALL
        </Link>
      </section>
      <ProductHighlight />
    </main>
  );
}
