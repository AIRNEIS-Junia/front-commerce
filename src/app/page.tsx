import Hero from "../components/Hero/Hero";
import HorizontalCarousel from "../components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "../components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "../components/Home/ProductHighlight";

export default async function Home() {
  try {
  } catch (error) {
    console.error("Error fetching random products:", error);
  }

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
