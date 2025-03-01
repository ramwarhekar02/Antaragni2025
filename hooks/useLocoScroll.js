import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.1,
      multiplier: 1, 
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
