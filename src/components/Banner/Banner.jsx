import React from 'react'
import BannerPng from '../../assets/food/banner.png';
import { motion } from 'framer-motion';
import { SlideUp } from "../Hero/Hero"

const Banner = () => {
  return (
    <div className='container py-24'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
            {/* image section */}
            <div className='relative'>
                <motion.img 
                initial={{ opacity: 0, x: -100, y: 100, }}
                whileInView={{ 
                  opacity: 1,
                  x: 50,
                  y: -50,
                 }}
                 whileInHover={{ scale: 1.2,
                  rotate: 15,
                  x: 50,
                  y: -50,
                 }}
                 transition={{ duration: 0.8, delay: 0.5, scale: { duration: .5 } }}
                src={BannerPng} alt="" className='relative z-10 w-full lg:max-w-[350px] img-shadow' />
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[50%] right-[50%] transform translate-x-[60%] translate-y-[-60%] h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-yellow-300 rounded-full">

                </motion.div>
            </div>

            {/* text content section */}
            <div className='space-y-5 lg:max-w-[400px]'>
                <motion.h1 
                variants={SlideUp(1)}
                initial="hidden"
                whileInView="show"
                className="text-6xl uppercase font-semibold font-league">The best yummy food in town</motion.h1>
                <motion.p 
                variants={SlideUp(1.3)}
                initial="hidden"
                whileInView="show"
                className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, voluptas nam id, qui odio at impedit dolor laborum eos beatae ratione quibusdam nemo inventore, nisi eveniet atque recusandae ex itaque!</motion.p>
                <motion.button 
                variants={SlideUp(1.6)}
                initial="hidden"
                whileInView="show"
                className='btn-primary'>Order Now</motion.button>
            </div>
        </div>
    </div>
  )
}

export default Banner