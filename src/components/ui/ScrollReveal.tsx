import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const ScrollReveal = ({
  children,
  width = "fit-content",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: ScrollRevealProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div style={{ width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
