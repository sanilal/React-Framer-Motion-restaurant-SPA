import React from 'react'
import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { IoCartOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const SlideUp = (delay) => {
    return {
        initial: {
            y: "100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            },
        },
    };
};

const Hero = () => {
  return (
    <main>
        <div className="container min-h-[600px] flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
                {/* text content here */}
                <div className='space-y-3 mt-14 to-current md:text-left md:mt-0'>
                    <motion.h1 variants={SlideUp(0.5)} 
                    initial="initial"
                    whileInView="animate"
                    className='relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent'>Yummy
                        <img src={Leaf} alt="" className='absolute w-[50px] top-0 right-0 md:right-[100px]' />
                    </motion.h1>
                    <motion.h1 
                    variants={SlideUp(1)}
                    initial="initial"
                    whileInView="animate"
                    className='text-5xl lg:text-7xl xl:text-8xl font-bold uppercase'>BREAKFAST</motion.h1>
                    <motion.p 
                    variants={SlideUp(1.5)}
                    initial="initial"
                    whileInView="animate"                    className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus dolores quisquam doloribus tenetur eaque saepe placeat quidem vitae repellendus aliquid nulla, exercitationem pariatur. Incidunt at nam excepturi repellat officiis! </motion.p>
                    <motion.button
                    variants={SlideUp(2)}
                    initial="initial"
                    whileInView="animate"
                    className='btn-primary inline-block !mt-10'>
                        <IoCartOutline />
                        Order Now
                    </motion.button>
                </div>
                {/* Images here */}
                <div className='relative'>
                    <img src={FoodPng} alt="" className='w-[450px] img-shadow' />
                    <img src={Spoon} alt="" className='w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow' />
                    <img src={Banana} alt="" className='w-[400px]  absolute  top-[-30px] right-[-130px] md:right-[-160px] img-shadow' />
                </div>
                {/* text content here */}
            </div>
        </div>
    </main>
  )
}

export default Hero