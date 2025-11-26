import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image04 from "../assets/Images/img04.jpg";
import Image05 from "../assets/Images/img05.jpg";
import Image06 from "../assets/Images/img06.jpg";

// 1. Explicitly type the variants using 'Variants'
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

interface ProductCardProps {
    img: string;
    title: string;
    price: number;
    subtitle: string;
}

// 2. ProductCard component (No changes needed here, just context)
const ProductCard = ({ img, title, price, subtitle }: ProductCardProps) => (
    <motion.div 
        variants={cardVariants}
        className='flex flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-white/5 group h-full'
    >
        <div className='h-64 overflow-hidden relative'>
            <img 
                src={img} 
                alt={title} 
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500' 
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4'>
                <span className='text-white text-sm font-medium tracking-wide'>Order Now</span>
            </div>
        </div>
        <div className='bg-[#D4D4D8] group-hover:bg-[#E4E4E7] transition-colors flex-grow flex flex-col items-center text-center p-4'>
            <h3 className="font-serif text-xl font-bold text-[#1A0F0A] mb-1">{title}</h3>
            <span className="text-xs text-gray-600 uppercase tracking-widest mb-3">{subtitle}</span>
            <div className="w-full bg-[#1A0F0A] py-2 mt-auto">
                <span className="text-[#F3E5D8] font-medium tracking-widest">${price.toFixed(2)}</span>
            </div>
        </div>
    </motion.div>
)

const Favorites = () => {
    return (
        <div>
            <section className="bg-[#FDE68A] py-20 px-6">
                <motion.div 
                    className="container mx-auto max-w-6xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2 
                        variants={cardVariants} 
                        className="text-4xl font-serif text-[#2C1810] text-center mb-12 font-bold"
                    >
                        Our Daily Favorites
                    </motion.h2>
      
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProductCard 
                            title="Signature Latte" 
                            subtitle="Creamy & Rich"
                            price={5.50} 
                            img={Image04}
                        />
                        <ProductCard 
                            title="Morning Bun" 
                            subtitle="Freshly Baked"
                            price={4.00} 
                            img={Image05}
                        />
                        <ProductCard 
                            title="Cold Brew Tonic" 
                            subtitle="Zesty & Cool"
                            price={6.00} 
                            img={Image06}
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Favorites;