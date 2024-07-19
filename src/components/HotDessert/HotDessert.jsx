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
        
    </section>
  )
}

export default HotDessert