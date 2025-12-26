"use client";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const CounterCard = ({ value, suffix, label }) => {


  return (
    <Card
      className="text-center border-0 h-100"
      style={{
        borderRadius: "18px",
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        padding: "28px",
        fontFamily:"Montserrat, sans-serif"
      }}
    >
      <h2 className="fw-bold mb-1">
        {value}
        {suffix}
      </h2>
      <p className="mb-0 small">{label}</p>
    </Card>
  );
};

export default CounterCard;
