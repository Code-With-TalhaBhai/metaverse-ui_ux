'use client';

import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
import styles from "../styles";
import { staggerContainer,planetVariants,fadeIn } from "../utils/motion";


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
        >
          <img className="w-[90%] h-[90%] object-contain"
          src="/get-started.png"
          alt="" />
      </motion.div>

      <motion.div
        variants={fadeIn('left','tween',0.2,1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaverse  Works"/>
        <TitleText title={<>Get started with just a few clicks</>}/>
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-6">
          {
            startingFeatures.map((data,index)=>(
              <StartSteps key={index} num={index+1} feature={data}/>
            ))
          }
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default GetStarted;
