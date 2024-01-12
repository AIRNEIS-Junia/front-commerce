"use client";
import HorinzontalCarouselItem from "@/components/UI/Carousel/HorizontalCarousel/HorinzontalCarouselItem";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { items } from "@/components/UI/Carousel/HorizontalCarousel/items";

// Define a function to slice the items array based on indices
const sliceItems = (
  fromItemCarouselIndex: number,
  toItemCarouselIndex: number,
) => {
  // Récupérer le premier et le dernier élément
  const firstItem = items[0];
  const secondItem = items[1];
  const lastItem = items.length - 1;
  // Vérifier si toItemCarouselIndex est supérieur ou égal à la longueur des éléments
  if (toItemCarouselIndex > items.length) {
    return [...items.slice(fromItemCarouselIndex), firstItem];
  } else if (fromItemCarouselIndex < 0) {
    // Utiliser items.length + fromItemCarouselIndex comme indice ajusté
    return [...items.slice(items.length + fromItemCarouselIndex), lastItem];
  } else {
    return items.slice(fromItemCarouselIndex, toItemCarouselIndex);
  }
};

// Define the main HorizontalCarousel component
const HorizontalCarousel = () => {
  // Refs to track the current indices for slicing items
  const fromItemCarouselIndex = useRef<number>(0);
  const toItemCarouselIndex = useRef<number>(3);
  // State to manage the currently displayed items
  const [displayedItems, setDisplayedItems] = useState(
    sliceItems(fromItemCarouselIndex.current, toItemCarouselIndex.current), // Initial display range
  );

  // Callback function to handle clicking on the left chevron
  const handlePrevSlide = useCallback(() => {
    // Check if there are more items to display to the left
    if (fromItemCarouselIndex.current > 0) {
      // Decrement indices to show the previous set of items
      fromItemCarouselIndex.current--;
      toItemCarouselIndex.current--;
    } else {
      // If at the beginning, wrap around to the end
      fromItemCarouselIndex.current = items.length - 3;
      toItemCarouselIndex.current = items.length;
    }

    // Update the displayed items
    updateDisplayedItems();

    console.log(
      "fromItemCarouselIndex.current",
      fromItemCarouselIndex.current,
      "toItemCarouselIndex",
      toItemCarouselIndex.current,
    );
  }, []);

  // Callback function to handle clicking on the right chevron
  const handleNextSlide = useCallback(() => {
    // Check if there are more items to display to the left
    if (fromItemCarouselIndex.current < items.length - 1) {
      // Decrement indices to show the previous set of items
      fromItemCarouselIndex.current++;
      toItemCarouselIndex.current++;
    } else {
      // If at the beginning, wrap around to the end
      fromItemCarouselIndex.current = 0;
      if (window.innerWidth >= 1024) {
        toItemCarouselIndex.current = 3;
      } else {
        toItemCarouselIndex.current = 2;
      }
    }

    // Update the displayed items
    updateDisplayedItems();

    console.log(
      "fromItemCarouselIndex.current",
      fromItemCarouselIndex.current,
      "toItemCarouselIndex",
      toItemCarouselIndex.current,
    );
  }, []);

  const handleResize = useCallback(() => {
    // Définir toItemCarouselIndex en fonction de la taille de l'écran
    if (window.innerWidth >= 1024) {
      toItemCarouselIndex.current = 3; // Afficher trois éléments sur les grands écrans
    } else {
      toItemCarouselIndex.current = 2; // Afficher deux éléments par défaut
    }

    // Mettre à jour les éléments affichés
    setDisplayedItems(
      sliceItems(fromItemCarouselIndex.current, toItemCarouselIndex.current),
    );
  }, []);

  // Function to update the displayed items based on current indices
  const updateDisplayedItems = () => {
    setDisplayedItems(
      sliceItems(fromItemCarouselIndex.current, toItemCarouselIndex.current),
    );
  };

  // Effect to update displayed items when the component mounts
  useEffect(() => {
    handleResize();
    updateDisplayedItems();
    console.log("displayedItems", displayedItems);
  }, []);

  // Memoized rendering of items to optimize performance
  const renderItems = useMemo(() => {
    return displayedItems.map((item) => (
      <HorinzontalCarouselItem
        key={item.id}
        image={item.image}
        alt={item.alt}
        name={item.name}
        link={""}
      />
    ));
  }, [displayedItems]);

  // Render the main component structure
  return (
    <div className={"relative"}>
      {/* Left chevron for navigating to previous set of items */}
      <div
        onClick={handlePrevSlide}
        className={
          "absolute left-[1.5rem] top-1/2 -translate-y-1/2 z-[3] cursor-pointer"
        }
      >
        <FaChevronLeft />
      </div>
      {/* Grid to display the rendered items */}
      <div className={"grid grid-cols-2 lg:grid-cols-3 border-b border-oyster"}>
        {renderItems}
      </div>
      <div
        onClick={handleNextSlide}
        className={
          "absolute right-[1.5rem] top-1/2 -translate-y-1/2 z-[3] cursor-pointer"
        }
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default HorizontalCarousel;
