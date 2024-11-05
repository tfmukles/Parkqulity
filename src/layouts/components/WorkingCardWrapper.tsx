"use client";

import { HowItWorksItem } from "@/types";
import { useState } from "react";
import WorkCard from "./WorkCard";

const WorkingCardWrapper = ({ lists }: { lists: HowItWorksItem[] }) => {
  const [lastHover, setHover] = useState(0);
  const handleChange = (index: number) => {
    setHover(index);
  };

  return lists.map((item, index) => {
    return (
      <WorkCard
        handleChange={handleChange}
        key={index}
        image={item.image}
        title={item.title}
        desc={item.desc}
        isActive={index === lastHover}
        index={index}
      />
    );
  });
};

export default WorkingCardWrapper;
