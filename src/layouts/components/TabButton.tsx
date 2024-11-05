import ImageFallback from "@/helpers/ImageFallback";
import { Features } from "@/types";
import { motion } from "framer-motion";

const TabButton = ({
  isActive,
  onClick,
  label,
  index,
}: {
  label: Omit<Features["slider"][0], "tab_content">;
  isActive: boolean;
  index: number;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 relative items-center justify-center md:text-h6 py-5 text-light`}
    >
      {index % 2 === 0 ? (
        <div className={`bg-transparent relative z-20`}>
          <span>{label.label}</span>
          <ImageFallback
            className="inline-block ml-3"
            src={label.icon}
            width={24}
            height={24}
            alt="prev-icon"
          />
        </div>
      ) : (
        <div className={`bg-transparent relative z-20`}>
          <ImageFallback
            className="inline-block mr-3"
            src={label.icon}
            width={24}
            height={24}
            alt="prev-icon"
          />
          <span>{label.label}</span>
        </div>
      )}

      {isActive ? (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-primary z-10 rounded-xl md:rounded-full"
          layoutId="rounded"
        />
      ) : null}
    </button>
  );
};

export default TabButton;
