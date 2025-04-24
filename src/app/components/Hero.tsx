import Image from 'next/image';
import Link from 'next/link';
import { AuroraBackground } from './ui/aurora-background';
import ScrollColorChange from './ui/ScrollColorChange';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center py-20" 
         style={{ backgroundImage: "url('/bg.png')" }}>
      {/* 极光效果 - 使用绝对定位并铺满整个Hero区域 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[2]">
        <div className="relative w-full h-full">
          <AuroraBackground className="!h-[100%] !absolute !inset-0 !bg-transparent !flex-none !items-start !justify-start !m-0 !p-0 !overflow-hidden">
            <div className="invisible">内容占位</div>
          </AuroraBackground>
        </div>
      </div>
      
      {/* 透明到白色的overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white to-80% z-[1]"></div>
      
      <div className="container mx-auto flex flex-col items-center relative z-10">
        
        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-10 md:p-16 px-4 sm:px-12 md:px-20 mb-8 sm:mb-16 w-full max-w-[1400px] relative pb-0 overflow-hidden">
          {/* Subtitle with Logo */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="bg-[#F5F5FF] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center border border-[#6A5AE0]/20">
              <Image 
                src="/logo-black.png" 
                alt="Promtium Logo" 
                width={20} 
                height={20}
                className="mr-1.5 sm:mr-2"
              />
              <span className="text-[#6A5AE0] font-medium text-sm sm:text-base">Promtium</span>
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-3 sm:mb-4">
            An <span className="text-[#6A5AE0]">innovative platform</span> that combines AI with blockchain
          </h1>
          
          {/* Content */}
          <p className="text-gray-600 text-center text-sm sm:text-base mb-6 sm:mb-8 px-1">
            This project aims to leverage the strengths of AI and blockchain to create a platform where users can generate, mint, and trade unique digital prompts as NFTs.
          </p>
          
          {/* Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 mx-auto w-full sm:w-[90%] md:w-[80%]">
            <div className="flex flex-col items-center p-2 sm:p-3 rounded-lg">
              <span className="text-[#6A5AE0] font-medium text-xs sm:text-sm mb-1 sm:mb-3">Liquidity</span>
              <span className="text-black font-bold text-2xl sm:text-3xl md:text-4xl font-heading">60<span className="font-bold font-sans">%</span></span>
            </div>
            
            <div className="flex flex-col items-center p-2 sm:p-3 rounded-lg">
              <span className="text-[#6A5AE0] font-medium text-xs sm:text-sm mb-1 sm:mb-3">Staking Rewards</span>
              <span className="text-black font-bold text-2xl sm:text-3xl md:text-4xl font-heading">20<span className="font-bold font-sans">%</span></span>
            </div>
            
            <div className="flex flex-col items-center p-2 sm:p-3 rounded-lg">
              <span className="text-[#6A5AE0] font-medium text-xs sm:text-sm mb-1 sm:mb-3">Marketing</span>
              <span className="text-black font-bold text-2xl sm:text-3xl md:text-4xl font-heading">10<span className="font-bold font-sans">%</span></span>
            </div>
            
            <div className="flex flex-col items-center p-2 sm:p-3 rounded-lg">
              <span className="text-[#6A5AE0] font-medium text-xs sm:text-sm mb-1 sm:mb-3">Community & Team</span>
              <span className="text-black font-bold text-2xl sm:text-3xl md:text-4xl font-heading">10<span className="font-bold font-sans">%</span></span>
            </div>
          </div>
          
          {/* Button */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <Link href="https://platform.promtium.com/" target="_blank">
              <button className="btn-primary text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8">Dapp</button>
            </Link>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center">
            <div className="w-[95%] sm:w-[90%] relative h-[280px] sm:h-[400px] md:h-[600px]">
              <Image 
                src="/image-hero.png" 
                alt="Hero Image" 
                layout="fill"
                objectFit="contain"
                className="mt-2 sm:mt-4"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Additional Content Below Card - 使用ScrollColorChange组件 */}
        <div className="max-w-[1200px] text-center mb-4 px-4">
          <ScrollColorChange 
            className="text-base sm:text-lg md:text-2xl font-medium"
            startColor="rgb(0, 0, 0)"
            endColor="rgb(106, 90, 224)"
          >
            The integration of artificial intelligence (AI) and blockchain technology is reshaping the digital landscape, offering new avenues for creativity, ownership, and economic exchange. This project, focused on the minting of AI-generated prompts as Non-Fungible Tokens (NFTs), stands at the intersection of these revolutionary technologies. By transforming AI-generated prompts into unique digital assets, this initiative not only democratizes the creation of NFTs but also introduces a novel form of digital interaction and ownership.
          </ScrollColorChange>
        </div>
      </div>
    </div>
  );
};

export default Hero; 