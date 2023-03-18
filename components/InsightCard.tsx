'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

fadeIn

const InsightCard = ({imgUrl,title,subtitle,i}:{imgUrl:string,title:string,subtitle:string,i:number}) => (
  <motion.div
  variants={fadeIn('up','spring',i * 0.25,1)}
  className="flex flex-col md:flex-row gap-4"
  >
    <img src={imgUrl} alt="" 
    className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"/>
    <div className="w-full flex items-center justify-between">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
          <p className="mt-[16px] font-normal lg:[20px] text-[14px] text-secondary-white">{subtitle}</p>
        </div>

        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <img src="arrow.svg" className="w-[40%] h-[40%] object-contain" alt="" />
        </div>

    </div>
  </motion.div>
);

export default InsightCard;
