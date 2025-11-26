import React from 'react';
import { motion } from 'framer-motion';
import Image01 from '../assets/Images/img01.jpg';
import Image02 from '../assets/Images/img02.jpg';
import Image03 from '../assets/Images/img03.jpg';

// 1. Define Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

interface FeatureItemProps {
    img: string;
    title: string;
    desc: string;
    reverse?: boolean;
}

// 2. Updated FeatureItem to be a motion component
const FeatureItem = ({ img, title, desc, reverse }: FeatureItemProps) => (
    <motion.div 
        variants={itemVariants}
        className={`flex flex-col md:flex-row items-center gap-6 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >

        <div className='w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-lg'>
            <img src={img} alt={title} className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500' />
        </div>

        <div className={`text-center ${reverse ? 'md:text-right' : 'md:text-left'} flex-1`}>
            <h3 className='text-[#FFDF8F] text-xl font-serif font-bold mb-2'>{title}</h3>
            <p className={`text-[#FFDF8F]/80 text-sm leading-relaxed max-w-xs ${reverse ? 'md:ml-auto' : 'md:mr-auto'}`}>
                {desc}
            </p>
        </div>
    </motion.div>
);

const ZestDifference = () => {
    return (
        <div>
            <section className='bg-[#1A0F0A] py-20 px-4'>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className='max-w-5xl mx-auto border border-[#D4C3B5]/20 rounded-[3rem] p-8 md:p-16 relative bg-[#2C1A14]'
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-serif text-[#FFDF8F] text-center mb-16"
                    >
                        The Zest Difference
                    </motion.h2>

                    <div className='grid gap-12 md:gap-8 justify-center'>
                        <FeatureItem
                            img={Image01}
                            title='Premium Roasts'
                            desc='Small-batch beans roasted daily for peak flavor profiles that awaken your senses.'
                        />

                        <FeatureItem
                            img={Image02}
                            title='Organic Ingredients'
                            desc='Milk and syrups sourced from local, organic farms ensuring the purest taste.'
                            reverse={true} 
                        />

                        <FeatureItem
                            img={Image03}
                            title='Cozy Workspace'
                            desc="High-speed internet and aesthetic vibes designed for your most productive workday."
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default ZestDifference;