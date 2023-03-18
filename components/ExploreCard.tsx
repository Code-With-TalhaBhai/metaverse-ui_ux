'use client';

import { motion } from "framer-motion";
import React,{useState} from "react";
import styles from "../styles";
import { fadeIn } from "../utils/motion";


// type Props = {
//   id: string,
//   imgUrl: string,
//   title: string
// }
interface world {
    id: string,
    imgUrl: string,
    title: string,
}

type Props = {
  element: world;
  index: number,
  active: string,
  handleClick: React.Dispatch<React.SetStateAction<string>>
}

const ExploreCard = ({element:{id,imgUrl,title},index,active,handleClick}:Props) =>(
  <motion.div
  variants={fadeIn('right','spring',index*0.5,0.75)}
  className={`relative ${id === active ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  onClick={()=>handleClick(id)}
  >
    <img 
    className="absolute w-full h-full object-cover rounded-[24px]"
    src={imgUrl}
    alt="" 
    />

    {
    active !== id ? (
      <h3 className="font-extrabold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-90 lg:origin-[0,0]">{title}</h3>
    ):(
      <div className="absolute bottom-0 p-8 flex-col justify-start w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          <img src="/headset.svg" className="w-1/2 h-1/2 object-contain" alt="" />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Enter the Metaverse</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-24px text-white">{title}</h2>
      </div>
    )
    }

  </motion.div>
);

export default ExploreCard;
