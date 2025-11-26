import { motion } from "framer-motion";
import Navbar from '../components/Navbar'
import HeroImg from '../assets/Images/Hero.png';
import ZestDifference from '../components/ZestDifference';
import Favorites from '../components/Favorites';
import Footer from '../components/Footer';

const Home = () => {
    // Animation variants to keep code clean
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div>
            <Navbar />

            {/* Hero section */}
            <section id='home' className='relative w-full min-h-[400px] flex items-center justify-center overflow-hidden'>
            <img
                src={HeroImg}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full lg:static lg:h-[700px] lg:w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-start pl-6 md:pl-20 lg:pl-32">
                <div className="max-w-[250px] sm:max-w-md md:max-w-lg text-left">
                    
                    {/* Animated Heading */}
                    <motion.h1 
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.2 }} // Title loads first
                        variants={fadeInUp}
                        className="text-white font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide drop-shadow-lg leading-tight"
                    >
                        Café Zest
                    </motion.h1>

                    {/* Animated Paragraph */}
                    <motion.p 
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.4 }} // 0.2s delay after title
                        variants={fadeInUp}
                        className="text-gray-200 mt-2 md:mt-4 text-xs sm:text-sm md:text-lg leading-relaxed drop-shadow-md"
                    >
                        Freshly roasted coffee infused with a zest for life. Locally sourced, organically brewed.
                    </motion.p>

                    {/* Animated Button */}
                    <motion.button 
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.6 }} // 0.2s delay after text
                        variants={fadeInUp}
                        className="mt-4 md:mt-8 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-[#dadada] text-stone-800 font-semibold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Explore Menu
                    </motion.button>
                </div>
            </div>
        </section>

            {/* About section */}
            <ZestDifference />

            {/* Favorites section */}
            <Favorites />

            <Footer />
            
        </div>
    )
}

export default Home