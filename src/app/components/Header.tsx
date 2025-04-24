"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white z-50 sticky top-0 h-[75px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* 左侧: Logo和导航 */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-8">
              <Image 
                src="/logo-black.png" 
                alt="Promtium Logo" 
                width={32} 
                height={32}
                className="mr-2"
              />
              <span className="font-bold text-xl">Promtium</span>
            </Link>
            
            {/* 导航链接 */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#home" className="text-gray-800 hover:text-[#6A5AE0] text-sm font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-800 hover:text-[#6A5AE0] text-sm font-medium">
                About
              </Link>
              <Link href="#market" className="text-gray-800 hover:text-[#6A5AE0] text-sm font-medium">
                Market
              </Link>
              <Link href="#features" className="text-gray-800 hover:text-[#6A5AE0] text-sm font-medium">
                Features
              </Link>
              <Link href="#roadmap" className="text-gray-800 hover:text-[#6A5AE0] text-sm font-medium">
                Roadmap
              </Link>
            </nav>
          </div>
          
          {/* 右侧: 社交媒体按钮 */}
          <div className="flex items-center space-x-3">
            {/* Twitter X按钮 */}
            <Link 
              href="https://x.com/Promtium_" 
              target="_blank" 
              className="border border-gray-200 rounded-full p-2.5 hover:bg-gray-50"
            >
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.804L3.736 19.5H0.426L8.156 10.669L0 0H6.826L11.539 6.093L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" 
                  fill="currentColor"
                />
              </svg>
            </Link>
            
            {/* Telegram按钮 */}
            <Link 
              href="https://t.me/Promtium_Official" 
              target="_blank" 
              className="border border-gray-200 rounded-full p-2.5 hover:bg-gray-50"
            >
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            
            {/* 连接钱包按钮 */}
            <Link 
              href="https://platform.promtium.com/" 
              target="_blank"
              className="bg-[#6A5AE0] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#5a4bc0] ml-2"
            >
              Dapp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 