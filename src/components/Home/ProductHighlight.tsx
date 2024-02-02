import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductHighlight = () => {
  return (
    <section
      className={"p-extrasmall pb-medium md:p-0 bg-opal text-offWhiteTint"}
    >
      <div className="mx-auto md:grid md:grid-cols-2">
        <div className={"aspect-square relative md:order-last"}>
          <Image
            fill
            src={"/images/products/product-1.webp"}
            className={"object-cover"}
            alt={""}
          />
        </div>
        <div
          className={
            "md:order-first md:flex md:flex-col md:justify-center md:w-2/3 mx-auto"
          }
        >
          <h3 className={"my-medium md:mt-0 text-offWhiteTint"}>
            Native light chair
          </h3>
          <p className={"mb-small"}>
            Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of
            great resistance, Kiln dried, made with a spike system and painted
            with P.U. (Polyurethane) With its entire structure painted in wood,
            it offers a lot of elegance to your environment and when cleaning is
            very easy, as it is washable and light for movement. Enough of
            receiving visitors and not having a place to accommodate them. With
            the chair, your days as a host will be marked by a lot of elegance
            and sophistication.
          </p>
          <Link className={"text-sm italic"} href={"/"}>
            VIEW PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
