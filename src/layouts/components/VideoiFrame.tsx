"use client";

import { useEffect, useState } from "react";

type Props = {
  video_id: string;
};

const VideoComponent = ({ video_id }: Props) => {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  return (
    <>
      {load && (
        <iframe
          className="ml-auto w-full absolute top-0 left-0 aspect-video inset-0 object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${video_id}?&autoplay=1&loop=1&mute=1&rel=0&showinfo=0&vq=small&color=black&iv_load_policy=3&playlist=${video_id}`}
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default VideoComponent;
