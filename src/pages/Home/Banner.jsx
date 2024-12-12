import React from 'react';
import banner from '../../assets/banner.webp';
import b2 from '../../assets/b2.webp';
import { motion } from "motion/react";
import { easeOut } from 'motion';

const Banner = () => {
    return (
        <div className="hero bg-pink-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <motion.img
                        src={banner}
                        animate={{ y:[50,100,50] }}
                        transition={{duration:10,repeat:Infinity}}
            className="max-w-sm w-96 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-900 shadow-2xl" />
                <motion.img
                        src={b2}
                        animate={{ x:[100, 150,100] }}
                        transition={{duration:10,delay:5,repeat:Infinity}}
            className="max-w-sm w-96 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-900 shadow-2xl" />
          </div>
          <div className='flex-1'>
            {/* <h1 className="text-5xl font-bold">Latest Job News For you!</h1> */}
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{duration:2,delay:1,ease:easeOut,repeat:Infinity}}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#ff33c1', '#0f1af5', '#2ff50f'] }}
                            transition={{duration:2,delay:1,ease:easeOut,repeat:Infinity}}>Jobs</motion.span> News For you!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;