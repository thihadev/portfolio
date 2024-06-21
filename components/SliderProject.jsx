'use client'
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import exp from 'constants';
// import './IconSlider.css'; // Import your CSS for stylin

const slides = [
    { image: '/projects/abccop.png' },
    { image: '/projects/abcpay.png' },
    { image: '/projects/am.png' },
    { image: '/projects/gitaywar.png' },
    { image: '/projects/heyplay.png' },
    { image: '/projects/shwenote.png' },
    { image: '/projects/techace.png' },
    { image: '/projects/zay2go.png' },
    { image: '/projects/zega.png' },
  // Array of your icon components or paths
];

export default function SliderProject () {

  const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full w-full overflow-hidden py-12">

            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:filter after:blur-3"></div>

            <div className="flex items-center justify-center text-4xl pb-8 text-textColorPrimary">
                Projects
            </div>
            <motion.div
                className="flex bg-transparent px-2 rounded-full"
                animate={{
                    x: ['0', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full py-4 bg-transparent">
                            <img 
                            src={slide.image} 
                            alt={slide.title}
                            width={130}
                            height={130}
                            className="rounded-full shadow-[0px_0px_6px_0px_#e2e8f0]"
                             />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
