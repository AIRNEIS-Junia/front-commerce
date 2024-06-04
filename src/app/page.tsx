import Hero from "../components/Hero/Hero";
import HorizontalCarousel from "../components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import SectionTitle from "../components/Section/SectionTitle";
import Link from "next/link";
import ProductHighlight from "../components/Home/ProductHighlight";
import { getCategories } from "@/services/category";
import { useSession } from "next-auth/react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { getProducts } from "@/services/product";

export default async function Home() {
  let categoriesInCarousel = await getCategories();
  let productInHighlight = await getProducts();
  const { t } = useTranslation();
  const { data: session } = useSession();

  try {
    const products = await getProducts();
  } catch (error) {
    console.error("Error fetching random products:", error);
  }

  return (
    <main className="">
      <Hero></Hero>
      <section>
        <SectionTitle title={t("enjoy_title")}></SectionTitle>
        <div className="container max-w-mobileContainer md:max-w-desktopContainer">
          <HorizontalCarousel categories={categoriesInCarousel} />
          <div>
            {" "}
            <Link href={"/"} className={"py-small flex justify-center italic"}>
              {t("see_all_categories")}
            </Link>
          </div>
        </div>
      </section>
      <ProductHighlight product={productInHighlight[0]} />
    </main>
  );
}
