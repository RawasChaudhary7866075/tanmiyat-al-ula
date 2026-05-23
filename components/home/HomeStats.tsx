"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 350,
    suffix: "+",
    label: "Properties Maintained",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Retention Rate",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Emergency Support",
    static: true,
  },
  {
    number: 12,
    suffix: "+",
    label: "Years Operational Experience",
  },
];

export default function HomeStats() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 10500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-stats">
      <div className="home-stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={`${animationKey}-${index}`}
            className="home-stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            <h3>
              {stat.static ? (
                <>
                  24<span>/7</span>
                </>
              ) : (
                <>
                  <CountUp
                    key={animationKey}
                    start={0}
                    end={stat.number}
                    duration={5.5}
                    separator=","
                  />
                  <span>{stat.suffix}</span>
                </>
              )}
            </h3>

            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}