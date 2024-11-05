"use client";

import { markdownify } from "@/lib/utils/textConverter";
import { motion } from "framer-motion";
import { useState } from "react";
import KeyFeaturesItem from "./KeyFeatureItem";
import Modal from "./Modal";

const KeyFeatures = ({
  features,
}: {
  features: Array<{
    title: string;
    image: string;
    features: Array<string>;
  }>;
}) => {
  const [selectedIndex, setFeature] = useState<number | null>(null);

  const selectedFeature =
    selectedIndex === null ? false : features[selectedIndex];

  const onSelecteFeature = (index: number) => {
    setFeature(index);
  };

  return (
    <>
      {!!selectedFeature && (
        <Modal className="backdrop-blur-[2px]" onClose={() => setFeature(null)}>
          <motion.div
            className={`w-full relative max-w-3xl mx-auto max-h-screen modal-body ${
              !!selectedFeature ? "active" : ""
            }`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
          >
            <div className="bg-gradient-primary rounded-lg p-px relative">
              <div className="bg-body rounded-lg pl-16 p-14">
                <ol className="space-y-5 list-decimal">
                  {selectedFeature.features.map((item, i) => (
                    <li
                      className="text-left"
                      key={i}
                      dangerouslySetInnerHTML={markdownify(item)}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
      <div className="row gy-5 gx-3 justify-center mt-3">
        {features.map((feature, i) => (
          <KeyFeaturesItem
            isActive={selectedIndex === i}
            onSelecteFeature={() => onSelecteFeature(i)}
            {...feature}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default KeyFeatures;
