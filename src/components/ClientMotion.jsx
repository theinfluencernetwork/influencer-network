// components/ClientMotion.jsx
"use client";

import { motion } from "framer-motion";

export const MotionDiv = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

export const MotionSection = ({ children, ...props }) => (
  <motion.section {...props}>{children}</motion.section>
);

export const MotionLi = ({ children, ...props }) => (
  <motion.li {...props}>{children}</motion.li>
);

export const MotionDetails = ({ children, ...props }) => (
  <motion.details {...props}>{children}</motion.details>
);

export const MotionA = ({ children, ...props }) => (
  <motion.a {...props}>{children}</motion.a>
);
