"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HorinzontalCarouselItem from "@/components/UI/Carousel/HorizontalCarousel/HorinzontalCarouselItem";

const HorizontalCarousel = ({ categories }: { categories: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-testid={"horizontal-carousel"}>
      <Slider {...settings}>
        {categories?.map(
          (item: any, index: any) =>
            item && (
              <HorinzontalCarouselItem
                key={item.id}
                image={
                  (item.images && item.images[0]) ||
                  "/default-product-image.svg"
                }
                alt={item.alt}
                name={item.name}
                link={""}
              />
            ),
        )}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
