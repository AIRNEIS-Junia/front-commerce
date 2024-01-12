"use client";
import HorinzontalCarouselItem from "@/components/UI/Carousel/HorizontalCarousel/HorinzontalCarouselItem";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaChevronLeft } from "react-icons/fa";
import { items } from "@/components/UI/Carousel/HorizontalCarousel/items";

// Define a function to slice the items array based on indices
const sliceItems = (
  fromItemCarouselIndex: number,
  toItemCarouselIndex: number,
) => {
  return items.slice(fromItemCarouselIndex, toItemCarouselIndex);
};

// Define the main HorizontalCarousel component
const HorizontalCarousel = () => {
  // State to manage the currently displayed items
  const [displayedItems, setDisplayedItems] = useState(
    sliceItems(2, 4), // Initial display range
  );

  // Refs to track the current indices for slicing items
  const fromItemCarouselIndex = useRef<number>(2);
  const toItemCarouselIndex = useRef<number>(4);

  // Callback function to handle clicking on the left chevron
  const handlePrevSlide = useCallback(() => {
    // Check if there are more items to display to the left
    if (fromItemCarouselIndex.current > 0) {
      // Decrement indices to show the previous set of items
      fromItemCarouselIndex.current--;
      toItemCarouselIndex.current--;
      // Update the displayed items
      updateDisplayedItems();
    } else {
      // If at the beginning, wrap around to the end
      fromItemCarouselIndex.current = items.length - 1;
      toItemCarouselIndex.current = items.length;
      // Update the displayed items
      updateDisplayedItems();
    }
    console.log(
      "fromItemCarouselIndex.current",
      fromItemCarouselIndex.current,
      "toItemCarouselIndex",
      toItemCarouselIndex.current,
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
      <div className={"grid grid-cols-2 border-b border-oyster"}>
        {renderItems}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
