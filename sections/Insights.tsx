'use client';

import { motion } from "framer-motion";
import { TypingText,TitleText, InsightCard } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import {insights} from '../constants';




const Insights = () => (
  <section>
    <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <TypingText title="| Insight" textStyles="text-center" />
    <TitleText title={<>Insights about metaverse</>} textStyles="text-center" /> 

    <div className="mt-[50px] mx-[20px] flex flex-col gap-[30px]">
      {
        insights.map((data,index)=>(
          <InsightCard key={index} {...data} i={index} />
        ))
      }
    </div>
    </motion.div>
  </section>
);

export default Insights;
