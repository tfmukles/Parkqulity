"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { WhyUsItem } from "@/types";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const WhyUsSlider = ({ sliders }: { sliders: WhyUsItem[] }) => {
  return (
    <div className="relative px-12 xl:px-16">
      <Swiper
        className="mt-12 !overflow-y-visible"
        modules={[EffectFade, Navigation, Pagination]}
        loop={true}
        spaceBetween={48}
        speed={900}
        effect={"fade"}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          enabled: true,
          el: ".slider-pagination",
          clickable: true,
          bulletClass: `slider-bulet`,
        }}
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="lg:rounded-[800px] rounded-[100px] overflow-hidden">
                <div className="row lg:g-0 overflow-hidden">
                  <div className="lg:col-6 lg:order-1 order-2">
                    <div className="p-[10%] lg:px-[5.25rem] flex flex-col justify-center text-center h-full bg-gradient-primary">
                      <h4
                        className="max-md:text-h6 mb-4 px-[10%] lg:px-9"
                        dangerouslySetInnerHTML={markdownify(item.title)}
                      />
                      <p
                        className="text-gray"
                        dangerouslySetInnerHTML={markdownify(item.content)}
                      />
                    </div>
                  </div>
                  <div className="lg:col-6 order-1 lg:order-2">
                    <ImageFallback
                      className="mx-auto h-full w-full"
                      width={659}
                      height={558}
                      src={item.image}
                      alt="why-us image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="slider-pagination"></div>

        {/* <button className="prev absolute left-1/4 bottom-0 z-50">
          <LeftAngle />
        </button>
        <button className="next absolute right-1/4 bottom-0 z-50">
          <RgihtAngle />
        </button> */}
      </Swiper>
    </div>
  );
};

export default WhyUsSlider;
