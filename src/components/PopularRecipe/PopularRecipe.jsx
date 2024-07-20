import React from 'react'
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { delay, motion } from 'framer-motion';
import { SlideUp } from '../Hero/Hero';

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <section>
        <div className="container py-24">
            <motion.h3 
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl text-center font-league font-semibold uppercase py-8">
                {""}
                Our Popular recipes
            </motion.h3>

            {/*  card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {
                    PopularRecipeData.map((item) => {
                        return (
                            <div className='group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl'>
                                <img src={item.img} alt="" className='w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-700' />
                                <button className='btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100'>Buy Now</button>
                                <p className='text-xl font-semibold'>{item.name}</p>
                                <p className='text-xl font-bold text-yellow-500'>{item.price}</p>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default PopularRecipe