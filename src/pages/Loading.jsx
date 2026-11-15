import React from "react";
import "./Loading.css";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="loading-page">

      <motion.div
        className="loading-card"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.div
          className="logo-circle"
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear"
          }}
        >
          <FaHeartbeat />
        </motion.div>

        <h1>ElderShield</h1>

        <p>
          Smart Elderly Safety &
          Emergency Alert System
        </p>

        <div className="loader">
          <div className="progress"></div>
        </div>

        <span>Loading...</span>

      </motion.div>

    </div>
  );
}

export default Loading;