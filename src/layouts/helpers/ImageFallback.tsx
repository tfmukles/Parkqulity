/* eslint-disable jsx-a11y/alt-text */
"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ImageFallbackProps extends ImageProps {
  fallback?: string;
}

const ImageFallback = (props: ImageFallbackProps) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback!);
      }}
    />
  );
};

export default ImageFallback;
