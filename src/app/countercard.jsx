"use client";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const CounterCard = ({ value, suffix = "", label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 4,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Card
        className="text-center border-0 h-100"
        style={{
          borderRadius: "18px",
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          padding: "28px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <h2 className="fw-bold mb-1">
          <motion.span>{rounded}</motion.span>
          {suffix}
        </h2>
        <p className="mb-0 small">{label}</p>
      </Card>
    </motion.div>
  );
};

export default CounterCard;
