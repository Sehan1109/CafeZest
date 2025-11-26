const Hero = () => {
  return (
    <div>
        <section className="relative bg-[#261712] min-h-[600px] flex items-center overflow-hidden">
    {/* Background Texture Effect (Simulated Wood) */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1599818683510-1865942f7d3a?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center pointer-events-none"></div>
    
    <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Text Content */}
      <div className="space-y-6 text-center md:text-left pt-10 md:pt-0">
        <h1 className="text-6xl md:text-8xl font-serif text-white font-bold leading-tight">
          Café Zest
        </h1>
        <p className="text-[#D3C1B3] text-lg max-w-md mx-auto md:mx-0 font-light leading-relaxed">
          Freshly roasted coffee infused with a zest for life. Locally sourced, organically brewed.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#D4C3B5] text-[#261712] font-semibold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg">
          Explore Menu
        </button>
      </div>

      {/* Hero Image Composition */}
      <div className="relative flex justify-center items-center">
        {/* Decorative Beans (Simulated positions) */}
        <img 
          src="https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=2680&auto=format&fit=crop" 
          alt="Coffee Beans" 
          className="absolute -top-10 right-0 w-32 h-32 object-cover rounded-full opacity-60 blur-sm animate-pulse"
        />
        
        {/* Main Cup */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-[#3E2723]/50 overflow-hidden bg-black">
           <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" 
            alt="Latte Art" 
            className="w-full h-full object-cover transform scale-110 hover:scale-125 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Hero