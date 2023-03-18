"use client";
import { motion } from "framer-motion";
import styles from "../styles";

const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-col items-center justify-center relative z-20">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          METAVERSE
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className={`${styles.flexCenter}`}
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "twin", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full border-white h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]"
        />

        <img
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] relative z-10"
          src="/cover.png"
          alt=""
        />
          <a href="#exlorer">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
