"use client";
import ImageFallback from "@/helpers/ImageFallback";
import Marquee from "react-fast-marquee";

const BrandSlider = ({ brands }: { brands: any }) => {
  return (
    <div className=" brand-slider relative select-none pointer-events-none h-[75px]">
      <div className="overlay absolute h-full w-full"></div>
      <Marquee>
        {brands.lists.map((image: any) => {
          return (
            <ImageFallback
              key={image}
              className="h-[45px] align-middle w-auto mx-6 md:mx-10"
              width={175}
              height={75}
              src={image}
              alt="brand"
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default BrandSlider;
