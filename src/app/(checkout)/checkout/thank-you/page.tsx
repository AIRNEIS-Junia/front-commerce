import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className={"bg-beige px-8 py-12 rounded-medium flex flex-col"}>
      <h1 className={"text-center mb-12"}>Merci !</h1>
      <p>
        Votre commande a été enregistrée sous le numéro de commande DZQ8YF8Q .
        Vous pouvez pouvez suivre l'évolution de votre commande sur votre profil
        dans la section commandes. Notre équipe s'efforce de vous livrer votre
        commande le plus rapidement possible ! A bientôt bientôt sur àirneis.com
      </p>
      <Link
        className={"btn btn-black btn-dark text-center mt-16"}
        href={"/search"}
      >
        Acheter d'autres produits
      </Link>
    </div>
  );
};

export default Page;
