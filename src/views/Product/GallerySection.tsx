"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/Carousel/Carousel/Carousel";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/cn";

interface GallerySectionProps {
  className?: string;
  images: string[];
  children?: React.ReactNode;
}

export function GallerySection({
  className,
  images,
  children,
}: GallerySectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !thumbsApi) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      thumbsApi.scrollTo(api.selectedScrollSnap());
    });
  }, [api, thumbsApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const hasOnlyOneImage = images.length <= 1;

  return (
    <div
      className={cn(
        "relative flex max-w-full flex-col gap-10 md:max-w-[480px]",
        className,
      )}
    >
      <Carousel setApi={setApi} className="relative w-full ">
        <CarouselContent className="size-full">
          {images.length > 0 ? (
            images.map((image, index) => (
              <CarouselItem
                className="flex size-full h-[600px] flex-col items-center justify-center"
                key={image}
              >
                <Image
                  alt={""}
                  src={image !== "" ? image : "/default-product-image.svg"}
                  width={480}
                  height={600}
                  priority={index === 0}
                  className="mx-auto object-contain px-4"
                  sizes="(max-width: 450px) 300px, 480px"
                />
              </CarouselItem>
            ))
          ) : (
            <div className="h-[480px] w-[480px] relative mt-3">
              <Image
                alt={""}
                width={480}
                height={480}
                src={"/default-product-image.svg"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </CarouselContent>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-10 pb-6">
          {hasOnlyOneImage ? null : (
            <CarouselPrevious className="relative [&>span]:!text-white" />
          )}
          {hasOnlyOneImage ? null : (
            <CarouselNext className="relative [&>span]:!text-white" />
          )}
        </div>
      </Carousel>

      <Carousel setApi={setThumbsApi} opts={{ skipSnaps: true }}>
        <CarouselContent className="ml-0 h-[100px] w-full justify-start gap-6">
          {images.map((image, index) => (
            <div
              key={"thumbnail_" + image}
              onClick={() => onThumbClick(index)}
              className={cn(
                "flex size-24 shrink-0 items-center justify-center border border-white bg-neutral-100",
                { "border-black": index === current - 1 },
              )}
            >
              <Image
                alt={""}
                src={image !== "" ? image : `/default-product-image.svg`}
                width={100}
                height={100}
                sizes="100px"
              />
            </div>
          ))}
        </CarouselContent>
      </Carousel>
      {children}
    </div>
  );
}
