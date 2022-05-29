import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (delay) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    setTimeout(() => controls.start("show"), delay);
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export default useScroll;
