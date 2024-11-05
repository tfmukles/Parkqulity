"use client";
import { Features } from "@/types";
import { useState } from "react";
import ParkingSlider from "./ParkingSlider";
import TabButton from "./TabButton";

const TabContainer = ({ tabs }: { tabs: Features["slider"] }) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <>
      <div className="col-11 mx-auto mt-16 overflow-hidden">
        <div className="rounded-xl flex md:flex-row flex-col bg-[#2B2B2D] lg:mx-3 md:rounded-[80px] overflow-hidden">
          {tabs?.map((tab, key) => {
            return (
              <TabButton
                label={tab}
                onClick={() => setActiveTab(key + 1)}
                key={key + 1}
                index={key + 1}
                isActive={key + 1 === activeTab}
              />
            );
          })}
        </div>
      </div>
      {activeTab && (
        <div
          key={activeTab}
          data-aos={`${activeTab % 2 === 0 ? "fade-left" : "fade-right"}`}
        >
          <ParkingSlider content={tabs[activeTab - 1].tab_content} />
        </div>
      )}
    </>
  );
};

export default TabContainer;
