import Hero from "../components/Hero/Hero";
import HorizontalCarousel from "../components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "../components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "../components/Home/ProductHighlight";
import { getRandomProducts } from "@/services/product";

export default async function Home() {
  let productsInCarousel = await getRandomProducts(5);
  let productInHighlight = await getRandomProducts(1);

  return (
    <main className="">
      <Hero></Hero>
      <section>
        <SectionTitle title={"Enjoy our feature categories"}></SectionTitle>
        <div className="container max-w-mobileContainer md:max-w-desktopContainer">
          <HorizontalCarousel products={productsInCarousel} />
          <div>
            <Link
              href={"/"}
              className={"py-small flex justify-center italic mt-3"}
            >
              SHOP ALL
            </Link>
          </div>
        </div>
      </section>
      <ProductHighlight product={productInHighlight[0]} />
    </main>
  );
}
