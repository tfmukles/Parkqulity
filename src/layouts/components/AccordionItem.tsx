import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify, plainify } from "@/lib/utils/textConverter";
import { IFaq } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

const AccordionItem = ({
  isActive = true,
  onChangeAccordion,
  question,
}: {
  isActive?: boolean;
  onChangeAccordion: () => void;
  question: IFaq;
}) => {
  return (
    <div>
      <h6
        onClick={onChangeAccordion}
        className="max-md:text-2xl flex-1 flex justify-between items-center normal-case font-secondary font-bold pb-3 text-left cursor-pointer"
      >
        {plainify(question.question)}
        <DynamicIcon
          className={`${
            isActive ? "rotate-180" : ""
          } transition duration-500 ease-in-out`}
          icon="FaAngleDown"
        />
      </h6>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={`faq-content`}
          >
            <p
              className="text-lg text-gray font-normal capitalize text-left"
              dangerouslySetInnerHTML={markdownify(question.answer)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
