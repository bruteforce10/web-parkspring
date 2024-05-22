import React from "react";
import { useScroll, useTransform } from "framer-motion";

const HighlightText = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <h2 className="text-2xl" style={{ x: x }}>
      Aku tak tau apa yang terjadi antara aku dan kau
    </h2>
  );
};

export default HighlightText;
