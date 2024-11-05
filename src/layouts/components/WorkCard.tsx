"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import Line from "../Icons/line";

const WorkCard = ({
  title,
  desc,
  image,
  handleChange,
  index,
  isActive,
}: {
  title: string;
  desc: string;
  image: string;
  index: number;
  isActive: boolean;
  handleChange: (index: number) => void;
}) => {
  return (
    <div
      onMouseEnter={() => handleChange(index)}
      key={index}
      className="lg:col-3 md:col-6"
      data-aos="fade--up"
      data-aos-delay={index * 100}
    >
      <div
        data-serial={index + 1 < 9 ? "0" + (index + 1) : index + 1}
        className={`working-card before:content-[attr(data-serial)] before:z-1 group ${
          isActive ? "active" : ""
        }`}
      >
        <div className="rounded-[30px] lg:rounded-[800px] bg-body relative z-10">
          <div className="px-[10%] py-[4.5rem] lg:px-[10%] xl:3 text-center">
            <ImageFallback
              className="mx-auto mt-4 h-[11.5rem]"
              width={180}
              height={184}
              src={image}
              alt={title}
            />
            <h6
              className="text-dark text-2xl mt-4 transition-colors duration-300"
              dangerouslySetInnerHTML={markdownify(title)}
            />
            <p
              className="text-dark text-lg mt-2 transition-colors duration-300"
              dangerouslySetInnerHTML={markdownify(desc)}
            />
          </div>
        </div>
        <Line className="absolute opacity-0 invisible -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300" />
      </div>
    </div>
  );
};

export default WorkCard;
