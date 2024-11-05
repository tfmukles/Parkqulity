"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Calendar from "../Icons/Calendar";
import ButtonClose from "./ButtonClose";
import Modal from "./Modal";

const SheduleButton = ({
  label,
  iframe_link,
}: {
  label: string;
  iframe_link: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn btn-lg btn-primary mt-14 uppercase font-primary"
      >
        <Calendar className="mr-2 inline-block" />
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <Modal onClose={() => setOpen(false)}>
            <motion.div
              className="w-full relative max-w-[1120px] mx-auto max-h-screen py-0"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <ButtonClose onclose={() => setOpen(false)} />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <iframe
                className="rounded w-full h-[700px] max-h-[87vh] bg-dark"
                src={iframe_link}
                allowFullScreen
              ></iframe>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default SheduleButton;
