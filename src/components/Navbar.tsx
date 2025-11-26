import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header className='fixed top-0 left-0 w-full bg-[#1D0E00] text-white py-6 px-4 md:px-12 
        flex justify-between items-center z-50 shadow-md'>
        <div className='text-2xl font-serif font-bold tracking-wide'>Café Zest</div>
        <nav className='hidden md:flex gap-8 font-serif font-medium text-sm tracking-wider'>
          <a href='home' className='hover:text-[#FFDF8F] transition-colors'>Home</a>
          <a href='about' className='hover:text-[#FFDF8F] transition-colors'>About</a>
          <a href='favorites' className='hover:text-[#FFDF8F] transition-colors'>Favorites</a>
        </nav>
        <div className='flex items-center gap-4'>
          <button className='hover:bg-white/10 p-2 rounded-full transition'>
            <FaUser size={20} />
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar