import { useEffect, useState } from "react";
const useWindowSize = () => {
  const [sizeWindow, setSizeWindow] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const getWindowSize = () => {
      setSizeWindow({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", getWindowSize);
    console.log(sizeWindow);
  }, []);
  return sizeWindow;
};
export default useWindowSize;
