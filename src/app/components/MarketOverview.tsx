import React from 'react';
import Image from 'next/image';

const MarketOverview = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左侧: 内容 */}
          <div className="flex flex-col justify-center">
            {/* Subtitle */}
            <div className="inline-block bg-[#F0F8FF] px-4 py-2 rounded-full border border-[#3D8AFF]/20 mb-4 w-fit">
              <span className="text-[#3D8AFF] font-medium">Market</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Market Overview</h2>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                The NFT market, valued at $25 billion in 2021, is revolutionizing industries like art, music, gaming, and virtual real estate. Despite challenges like volatility and sustainability concerns, the continued adoption of NFTs highlights their significance in the digital economy.
              </p>
            </div>
          </div>
          
          {/* 右侧: 图片 */}
          <div className="flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Image 
                src="/image-market.png" 
                alt="Market Overview" 
                width={600} 
                height={450}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview; 