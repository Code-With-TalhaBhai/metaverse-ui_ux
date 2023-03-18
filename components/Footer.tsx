'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";



const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="text-white font-bold text-[44px] md:text-[64px]">Enter The Metaverse</h4>
          <button type="button" className="flex items-center h-fit px-6 py-4 rounded-[32px] bg-[#25618b] gap-[12px]">
            <img className="w-[24px] h-[24px] object-contain" src="/headset.svg" alt="" />
            <span className="text-white font-normal text-[16px] uppercase">Enter Metaverse</span>
          </button>
      </div>

      <div className="flex flex-col">
        {/* line */}
        <div className="mb-[50px] h-[2px] bg-white opacity-10"/>

        <div className="flex items-center flex-wrap justify-between gap-4 text-white">
          <h4 className="font-extrabold text-[24px]">Metaverse</h4>
          <p className="font-normal text-[14px] opacity-50">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
          <div className="flex gap-4">
            {
              socials.map((data,index)=>(
                <img key={index} 
                src={data.url}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))
            }
          </div>
        </div>

      </div>

    </div>

  </motion.footer>
);

export default Footer;
