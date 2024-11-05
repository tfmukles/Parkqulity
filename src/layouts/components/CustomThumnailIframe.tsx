"use client";

import Image from "next/image";
import { useState } from "react";

const CustomThumnailVideo = ({
  videoId,
  image,
  alt,
}: {
  videoId: string;
  image: string;
  alt: string;
}) => {
  const [play, setPlay] = useState(false);
  return (
    <div
      data-aos="fade--up"
      className="ml-auto w-full aspect-video inset-0 object-cover rounded-xl max-h-[666px] h-auto relative overflow-hidden"
    >
      <iframe
        className={`absolute transition top-0 left-0 w-full h-full rounded-xl ${
          !play ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        allowFullScreen
      />

      {!play && (
        <button
          onClick={() => setPlay(true)}
          className="play-button top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
          </svg>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      <Image
        className={`absolute top-0 left-0 w-full h-full transition ${
          play ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        src={image}
        alt={alt}
        width={1256}
        height={600}
      />
    </div>
  );
};

export default CustomThumnailVideo;
