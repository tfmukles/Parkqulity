"use client";

import { IFaq } from "@/types";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionWrapper = ({ faqs }: { faqs: IFaq[] }) => {
  const [activeIndex, setIndex] = useState<number | null>(0);
  const onChangeAccordion = (index: number) => {
    if (index === activeIndex) {
      setIndex(null);
      return;
    }
    setIndex(index);
  };

  return faqs?.map((item, i) => (
    <AccordionItem
      question={item}
      onChangeAccordion={() => onChangeAccordion(i)}
      isActive={activeIndex === i}
      key={i}
    />
  ));
};

export default AccordionWrapper;
