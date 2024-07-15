import React from 'react'
import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { IoCartOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <main>
        <div className="container min-h-[600px] flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
                {/* text content here */}
                <div className='space-y-3 mt-14 to-current md:text-left md:mt-0'>
                    <h1 className='relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent'>Yummy
                        <img src={Leaf} alt="" className='absolute w-[50px] top-0 right-0 md:right-[100px]' />
                    </h1>
                    <h1 className='text-5xl lg:text-7xl xl:text-8xl font-bold uppercase'>BREAKFAST</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus dolores quisquam doloribus tenetur eaque saepe placeat quidem vitae repellendus aliquid nulla, exercitationem pariatur. Incidunt at nam excepturi repellat officiis!</p>
                    <button className='btn-primary'>
                        <IoCartOutline />
                        Order Now
                    </button>
                </div>
                {/* text content here */}
                {/* text content here */}
            </div>
        </div>
    </main>
  )
}

export default Hero