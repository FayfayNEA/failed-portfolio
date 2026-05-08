"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function ScrollSection({ id, className = "scroll-mt-24", children }: ScrollSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.04 }}
      transition={{ type: "spring", stiffness: 320, damping: 32, mass: 1 }}
    >
      {children}
    </motion.section>
  );
}
