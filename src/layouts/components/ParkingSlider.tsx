"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Tab } from "@/types";

const ParkingSlider = ({ content }: { content: Tab }) => {
  return (
    <div className="streamSlider mt-16">
      <div className="rounded-[20%]  md:rounded-lg xl:rounded-[800px]  bg-gradient-primary p-px">
        <div className="bg-body rounded-[20%] md:rounded-lg xl:rounded-[800px] px-[15%] lg:px-0 py-14 ">
          <div className="row divider lg:gy-0 relative items-center">
            <div className="lg:col-6">
              <div className="text-center lg:max-w-sm mx-auto">
                <h6
                  className="mb-6 border border-light rounded-[60px] px-4 py-2 inline-block text-base"
                  dangerouslySetInnerHTML={markdownify(content.subtitle)}
                />
                <h4 dangerouslySetInnerHTML={markdownify(content.title)} />
                <div className="inline-flex justify-center items-center space-x-3 mt-8">
                  <div className="bg-gradient-primary p-px w-16 h-16 rounded-full inline-block">
                    <ImageFallback
                      className="rounded-full mx-auto"
                      width={64}
                      height={64}
                      src={content.image}
                      alt={content.name}
                    />
                  </div>
                  <p
                    className="text-2xl font-bold"
                    dangerouslySetInnerHTML={markdownify(content.name)}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-6 mt-32 lg:mt-0">
              <div className="text-center lg:max-w-sm mx-auto">
                <h6
                  className="mb-6 border border-light rounded-[60px] px-4 py-2 inline-block text-base"
                  dangerouslySetInnerHTML={markdownify(content.feature.title)}
                />
                <ul className="space-y-4">
                  {content.feature.list.map((feature, index) => (
                    <li className="flex space-x-2" key={index}>
                      <svg
                        className="flex-none mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="#E04D56"
                            d="M.547 7.84c2.23 2.413 4.391 4.585 6.47 7.332 2.259-4.494 4.571-9.004 8.387-13.887L14.376.814c-3.222 3.417-5.725 6.651-7.9 10.495-1.513-1.363-3.957-3.29-5.45-4.281l-.48.812Z"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h16v16H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p
                        className="text-gray text-xl font-medium capitalize"
                        dangerouslySetInnerHTML={markdownify(feature)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSlider;
