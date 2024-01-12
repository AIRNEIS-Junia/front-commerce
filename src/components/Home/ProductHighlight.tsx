import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductHighlight = () => {
  return (
    <section className={"p-extrasmall pb-medium bg-opal text-offWhiteTint"}>
      <div className="max-w-mobileContainer mx-auto">
        <div className={"aspect-square relative"}>
          <Image
            fill
            src={"/images/products/product-1.webp"}
            className={"object-cover"}
            alt={""}
          />
        </div>
        <h2 className={"my-medium"}>Native light chair</h2>
        <p className={"mb-small"}>
          Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of
          great resistance, Kiln dried, made with a spike system and painted
          with P.U. (Polyurethane) With its entire structure painted in wood, it
          offers a lot of elegance to your environment and when cleaning is very
          easy, as it is washable and light for movement. Enough of receiving
          visitors and not having a place to accommodate them. With the chair,
          your days as a host will be marked by a lot of elegance and
          sophistication.
        </p>
        <Link className={"text-sm italic"} href={"/"}>
          VIEW PRODUCT
        </Link>
      </div>
    </section>
  );
};

export default ProductHighlight;
