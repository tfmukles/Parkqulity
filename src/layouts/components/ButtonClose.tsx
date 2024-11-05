"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { motion } from "framer-motion";

const ButtonClose = ({ onclose }: { onclose: () => void }) => {
  return (
    <div className="text-right mb-4">
      <motion.button
        onClick={onclose}
        initial={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ rotate: 90 }}
        className="inline-flex items-center justify-center rounded-full p-1 border-2 border-primary h-9 w-9"
      >
        <DynamicIcon className="w-4 h-4" strokeWidth={1} icon="FaXmark" />
      </motion.button>
    </div>
  );
};

export default ButtonClose;
