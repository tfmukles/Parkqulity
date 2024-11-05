"use client";

import { motion } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  onClose,
  className,
}: {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}) => {
  const body = document.querySelector("body") as HTMLBodyElement;
  const closeHanlder = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".modal-body")) onClose();
  };

  return createPortal(
    (
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeHanlder}
        className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center mx-auto text-center z-[999] bg-body/80 px-4 overflow-y-auto ${className}`}
      >
        {children}
      </motion.div>
    ) as any,
    body,
  );
};

export default Modal;
