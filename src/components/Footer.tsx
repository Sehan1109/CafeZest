import React from 'react'
import { FaMapPin, FaMailBulk, FaPhone, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1A0F0A] text-[#9CA3AF] py-16 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif text-white font-bold tracking-wide">Café Zest</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3 hover:text-[#FFDF8F] transition-colors cursor-pointer">
                                <FaMapPin size={16} /> 123 Citrus Lane, Colombo
                            </div>
                            <div className="flex items-center gap-3 hover:text-[#FFDF8F] transition-colors cursor-pointer">
                                <FaMailBulk size={16} /> hello@cafezest.com
                            </div>
                            <div className="flex items-center gap-3 hover:text-[#FFDF8F] transition-colors cursor-pointer">
                                <FaPhone size={16} /> +94 77 123 4567
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#FFDF8F] hover:text-[#1A0F0A] transition-all">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#FFDF8F] hover:text-[#1A0F0A] transition-all">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#FFDF8F] hover:text-[#1A0F0A] transition-all">
                            <FaTiktok size={20} />
                        </a>
                    </div>
                </div>

                <div className="container mx-auto px-6 max-w-6xl mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    &copy; 2025 Café Zest. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer