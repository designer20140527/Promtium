import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A14] py-10 md:py-20 pb-36 md:pb-60 relative overflow-hidden">
      {/* 大型背景字体标识 */}
      <div className="absolute -bottom-10 md:-bottom-16 left-1/2 transform -translate-x-1/2 w-full">
        <div className="text-center">
          <h2 className="text-[120px] sm:text-[180px] md:text-[265px] font-bold text-transparent tracking-tighter"
              style={{ 
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}>
            Promtium
          </h2>
        </div>
      </div>
      
      {/* 底部羽化效果 */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-36 bg-gradient-to-t from-[#050510] to-transparent"></div>
      
      {/* 内容 */}
      <div className="max-w-[1400px] mx-auto px-4 relative z-10 mb-10 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左侧：ACTION */}
          <div className="md:text-left text-center">
            <h3 className="text-[#8A3DFF] text-sm font-medium mb-4 md:mb-6">ACTION</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#market" className="hover:text-white transition-colors">
                  Market
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 中间：空白或预留 */}
          <div className="hidden md:block"></div>
          
          {/* 右侧：版权和社交链接 */}
          <div className="text-center md:text-right mt-8 md:mt-0">
            <p className="text-white/80 text-sm mb-4">
              © 2025 Promtium Foundation<br />
              All rights reserved.
            </p>
            
            <div className="flex justify-center md:justify-end space-x-6">
              <Link href="https://x.com/Promtium_" target="_blank" className="text-white hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                </svg>
              </Link>
              <Link href="https://t.me/Promtium_Official" target="_blank" className="text-white hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Image 
                  src="/dextools.svg" 
                  alt="DexTools" 
                  width={24} 
                  height={24}
                  className="invert" 
                />
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Image 
                  src="/dexscreener.svg" 
                  alt="DexScreener" 
                  width={24} 
                  height={24}
                  className="filter brightness-0 invert" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 