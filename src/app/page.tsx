import Hero from "../components/Hero/Hero";
import HorizontalCarousel from "../components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "../components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "../components/Home/ProductHighlight";
import { getCategories } from "@/services/category";
import { getProducts } from "@/services/product";

export default async function Home() {
  let categoriesInCarousel = await getCategories();
  let productInHighlight = await getProducts();

  return (
    <main className="">
      <Hero></Hero>
      <section>
        <SectionTitle title={"Home"}></SectionTitle>
        <div className="container max-w-mobileContainer md:max-w-desktopContainer">
          {categoriesInCarousel && (
            <HorizontalCarousel categories={categoriesInCarousel} />
          )}

          <div>
            {" "}
            <Link href={"/"} className={"py-small flex justify-center italic"}>
              See all categories
            </Link>
          </div>
        </div>
      </section>
      <ProductHighlight product={productInHighlight[0]} />
    </main>
  );
}
