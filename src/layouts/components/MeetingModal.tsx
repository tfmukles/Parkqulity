"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ButtonClose from "./ButtonClose";
import Modal from "./Modal";

type Props = {
  video_id: string;
};

const VideoPopup = ({ video_id }: Props) => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="hidden lg:block absolute translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 md:right-[22%] z-30">
        <button
          data-aos="zoom-in"
          data-aos-delay="250"
          className="play-button"
          onClick={() => setPlay(true)}
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
      </div>
      <AnimatePresence>
        {play && (
          <Modal onClose={() => setPlay(false)}>
            <motion.div
              className="w-full relative max-w-6xl mx-auto max-h-screen modal-body"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <ButtonClose onclose={() => setPlay(false)} />
              <iframe
                className="rounded w-full aspect-video bg-dark"
                src={`https://www.youtube.com/embed/${video_id}?autoplay=1&mute=1`}
                allowFullScreen
              ></iframe>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoPopup;
