import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

// Hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
};

export default useWindowSize;
