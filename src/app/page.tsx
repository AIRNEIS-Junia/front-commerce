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
        <SectionTitle title={"Accueil"}></SectionTitle>
        <div className="container max-w-mobileContainer md:max-w-desktopContainer">
          {categoriesInCarousel && (
            <HorizontalCarousel categories={categoriesInCarousel} />
          )}
        </div>
      </section>
      <div className={"flex justify-center my-8"}>
        {" "}
        <Link href={"/search"} className={" italic btn btn-dark"}>
          Voir toutes les catégories
        </Link>
      </div>
      <ProductHighlight product={productInHighlight[0]} />
    </main>
  );
}
