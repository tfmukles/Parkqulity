"use client"

import { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';

const CounterUp = ({count}: {count: number}) => {
  
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [isView, setIsView] = useState<boolean>(false);

  useEffect(() => {
    const countRef = counterRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsView(true);
        }
      });
    });
    if (countRef) {
      observer.observe(countRef);
    }
    return () => {
      if (countRef) {
        observer.unobserve(countRef);
      }
    };
  }, [counterRef]);

  return (
    <span ref={counterRef}>
      {isView && <CountUp end={count} decimals={1} /> }
    </span>
  )
}

export default CounterUp