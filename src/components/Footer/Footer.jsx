import React from 'react'
import Logo from '../../assets/food/logo.png';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity:0 }}
    whileInView={{opacity: 1}}
    transition={{duration:1}}
    className='bg-yellow-200 rounded-t-3xl py-16'
    >
        <div className="container" py-14>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
{/* brand info */}
<div className='space-y-3 lg:max-w-[300px] '>
    <img src={Logo} alt="" className='w-24 ' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque suscipit explicabo ut neque est delectus obcaecati eum accusamus et ullam natus quidem blanditiis, quis nisi perspiciatis consequuntur nesciunt minima saepe!</p>
    <a className='inline-block mt-6 text-sm' href="#">contact@example.com</a>
</div>
{/* Quick links */}
<div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
    <div>
        <h3>Quick Links</h3>
        <ul className='space-y-3 mt-6'>
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Food</li>
        </ul>
    </div>
    <div>
        <h3>Quick Links</h3>
        <ul className='space-y-3 mt-6'>
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Food</li>
        </ul>
    </div>
    <div>
        <h3>Quick Links</h3>
        <ul className='space-y-3 mt-6'>
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Food</li>
        </ul>
    </div>
</div>

            </div>
        </div>
    </motion.footer>
  )
}

export default Footer