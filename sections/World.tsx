'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";



const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={(<>Track friends around you and invite them to play together in the same world</>)} textStyles="text-center"/>

      <motion.div
      variants={fadeIn('up','tween',0.3,1)}
      className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" className="w-full h-full object-cover"/>

        <div className="absolute bottom-20 right-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img className="w-full h-full" src="/people-01.png" alt="" />
        </div>

        <div className="absolute right-[50%] top-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img className="w-full h-full" src="/people-02.png" alt="" />
        </div>

        <div className="absolute bottom-60 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img className="w-full h-full" src="/people-03.png" alt="" />
        </div>

        <div className="md:block hidden absolute bottom-12 left-80 glassmorphism text-white rounded-3xl p-3">
        <div className="w-[146px] h-[100px] lg:w-[196px] lg:h-[150px]  pl-4 pt-6 bg-[url('/bg_blue.png')] bg-cover flex flex-col items-start justify-center rounded-3xl">
          <div className="flex">
            <img className="w-[24px] h-[24px] rounded-full" src="/people-04.png" alt="" />
            <img className="w-[24px] h-[24px] rounded-full" src="/people-05.png" alt="" />
            <img className="w-[24px] h-[24px] rounded-full" src="/people-06.png" alt="" />
            <p className="font-bold text-[12px]">+264 has joined</p>
          </div>
          <div className="pt-4">
              <p className="font-extrabold text-[18px]">The Upside Down</p>
          </div>
        </div>
        </div>

        
        <div className="md:block hidden absolute top-20 right-40 glassmorphism text-white rounded-3xl p-3">
        <div className="w-[146px] h-[100px] lg:w-[196px] lg:h-[150px] pl-4 pt-6 bg-[url('/bg_pink.png')] bg-cover flex flex-col items-start justify-center rounded-3xl">
          <div className="flex">
            <img className="w-[24px] h-[24px] rounded-full" src="/people-04.png" alt="" />
            <img className="w-[24px] h-[24px] rounded-full" src="/people-05.png" alt="" />
            <img className="w-[24px] h-[24px] rounded-full" src="/people-06.png" alt="" />
            <p className="font-bold text-[12px]">+234 has joined</p>
          </div>
          <div className="pt-4">
              <p className="font-extrabold text-[18px]">The Hawkins Lab</p>
          </div>
        </div>
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default World;
