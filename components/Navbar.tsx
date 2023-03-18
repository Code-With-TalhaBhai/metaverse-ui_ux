'use client';

import { motion } from "framer-motion";
import styles from "../styles";

const navVariants = {
  hidden:{
    opacity: 0,
    y: -50,
    transition:{
      type: 'spring',
      stiffness: 300,
      damping: 400
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1
    }
  }
}

const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-[24] h-[24] object-contain" />
      <h2 className="font-extrabold text-[24px] text-white leading-[30px]">Metaverse</h2>
      <img src="/menu.svg" alt="" className="w-[24px] h-[24px] object-contain"/>
    </div>
  </motion.nav>
);

export default Navbar;
