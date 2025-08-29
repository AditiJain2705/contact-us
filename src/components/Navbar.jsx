import Image from 'next/image';
import React from 'react'
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image src="/assets/startup-flora-logo.webp" alt='startup-flora-logo' height={65} width={210} />

                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-purple-600">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple-600">
                        Service
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple-600">
                        Success Stories
                    </a>
                </div>
                <div className="flex items-center">
                    <a
                        href="tel:18005710809"
                        className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#0BBF6A] to-[#0CABC8] text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <HiOutlinePhone className="text-lg" />
                        <span>1800-571-0809</span>
                    </a>
                    <button className="md:hidden text-gray-600 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar