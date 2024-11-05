"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MotionImageFallback = ({ src }: { src: string }) => {
  return (
    <div className="text-center px-4 overflow-hidden">
      <motion.div
        initial={{ borderRadius: 800 }}
        whileInView={{ borderRadius: 30 }}
        transition={{ duration: 0.6, type: "tween" }}
        className="mt-10 inline-block overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        <Image src={src} alt="serve" width={1650} height={820} />
      </motion.div>
    </div>
  );
};

export default MotionImageFallback;
