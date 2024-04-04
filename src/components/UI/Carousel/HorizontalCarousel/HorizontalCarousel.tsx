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
import {
  carouselItemType,
  items,
} from "@/components/UI/Carousel/HorizontalCarousel/items";

const sliceItems = (
  fromItemCarouselIndex: number,
  toItemCarouselIndex: number,
) => {
  const firstItemIndex = 0;
  const lastItemIndex = items.length - 1;

  if (toItemCarouselIndex > items.length) {
    return [
      ...items.slice(fromItemCarouselIndex),
      ...items.slice(firstItemIndex, 1),
    ];
  } else if (fromItemCarouselIndex < 0) {
    return [
      ...items.slice(items.length + fromItemCarouselIndex),
      ...items.slice(lastItemIndex),
    ];
  } else {
    return items.slice(fromItemCarouselIndex, toItemCarouselIndex);
  }
};

const HorizontalCarousel = () => {
  // Refs to track the current indices for slicing items
  const fromItemCarouselIndex = useRef<number>(0);
  const toItemCarouselIndex = useRef<number>(0);
  const [displayedItems, setDisplayedItems] = useState<carouselItemType[]>(
    sliceItems(fromItemCarouselIndex.current, toItemCarouselIndex.current),
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
        toItemCarouselIndex.current = 1;
      }
    }

    // Update the displayed items
    updateDisplayedItems();
  }, []);

  const handleResize = useCallback(() => {
    // Définir toItemCarouselIndex en fonction de la taille de l'écran
    toItemCarouselIndex.current = window.innerWidth >= 1024 ? 3 : 1;

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
      <div className={"grid lg:grid-cols-3 border-b border-oyster"}>
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
