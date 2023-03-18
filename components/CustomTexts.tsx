'use client';

import { motion } from "framer-motion";
import styles from "../styles";

const textVariant2 = {
  hidden : {
    opacity: 0,
    y: 20
  },
  show:{
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn'
    }
  }
};

const textContainer = {
  hidden: {
    opacity: 0,
  },
  show:(i = 1)=>({
    opacity: 1,
    transition: {staggerChildren: 0.1, delayChildren: i * 0.1}
  })
}


export const TypingText = (props:{title:string,textStyles?:string}) => (
  <motion.div variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${props.textStyles}`}>
    {
    Array.from(props.title).map((value,index)=>(
        <motion.span variants={textVariant2} key={index}>
          {value}
        </motion.span>
    ))
    }

  </motion.div>
);

export const TitleText = (props:{title:React.ReactNode,textStyles?:string}) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${props.textStyles}`}
  >
    {props.title}
  </motion.h2>
);
