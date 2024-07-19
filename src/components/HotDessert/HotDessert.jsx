import React from 'react'
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { delay, motion } from 'framer-motion';
import { SlideUp } from '../Hero/Hero';

const HotDEssertData = [
    {
        id: 1,
        name: "Hot Dessert",
        img: Food1,
        price: "AED 12",
        delay: 0.4,
    },
    {
        id: 2,
        name: "Hot Cake",
        img: Food2,
        price: "AED 20",
        delay: 0.8,
    },
    {
        id: 3,
        name: "Hot Cake",
        img: Food3,
        price: "AED 22",
        delay: 1.2,
    },
]


const HotDessert = () => {
  return (
    <section>
        <div className="container py-12">
            <motion.h3
            variants={SlideUp(0)}
            initial="hidden"
            whileInView="show"
            className="text-2xl font-semibold text-green-800 uppercase py-8">Hot Dessert</motion.h3>

            {/* grid section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {HotDEssertData.map((item)=>{
                    return (
                        <motion.div 
                        variants={SlideUp(item.delay)}
                        initial="hidden"
                        whileInView="show"
                        className='group bg-white/50 shadow-md p3 flex items-center gap-3'>
                            <img src={item.img} alt="" className='w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]' />
                            <div>
                                <h3 className='text-xl font-semibold'>{item.name}</h3>
                                <p className='text-xl text-yellow-500'>{item.price}</p>
                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </div>
    </section>
  )
}

export default HotDessert