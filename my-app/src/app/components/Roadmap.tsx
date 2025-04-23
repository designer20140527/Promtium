import React from 'react';
import Image from 'next/image';

const Roadmap = () => {
  return (
    <div className="bg-[#121212] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* 左侧: 内容 */}
          <div className="lg:col-span-3">
            {/* 标签 */}
            <div className="inline-block bg-[#222222] px-4 py-2 rounded-full border border-white/10 mb-4 w-fit">
              <span className="text-white/80 font-medium">Development</span>
            </div>
            
            {/* 标题 */}
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Roadmap</h2>
            
            {/* 卡片列表 */}
            <div className="space-y-6">
              {/* 卡片 1 */}
              <div className="border border-white/30 rounded-xl p-6 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-[#8A3DFF]/20 text-[#8A3DFF] px-3 py-1 rounded-md text-sm font-medium">PHASE 1</div>
                  <div className="text-white/60 transform -rotate-45">→</div>
                </div>
                <h3 className="text-xl font-bold mb-3">Launch AI<span className="font-['Poppins'] font-bold">-</span>prompt generation and NFT minting</h3>
                <p className="text-white/70">Launch AI-prompt generation and NFT minting, integrate the marketplace.</p>
              </div>
              
              {/* 卡片 2 */}
              <div className="border border-white/30 rounded-xl p-6 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-[#3D8AFF]/20 text-[#3D8AFF] px-3 py-1 rounded-md text-sm font-medium">PHASE 2</div>
                  <div className="text-white/60 transform -rotate-45">→</div>
                </div>
                <h3 className="text-xl font-bold mb-3">Introduce staking rewards</h3>
                <p className="text-white/70">Introduce staking rewards and governance mechanisms.</p>
              </div>
              
              {/* 卡片 3 */}
              <div className="border border-white/30 rounded-xl p-6 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-[#3DFF8A]/20 text-[#3DFF8A] px-3 py-1 rounded-md text-sm font-medium">PHASE 3</div>
                  <div className="text-white/60 transform -rotate-45">→</div>
                </div>
                <h3 className="text-xl font-bold mb-3">Expand globally</h3>
                <p className="text-white/70">Expand globally with localization and community events.</p>
              </div>
              
              {/* 卡片 4 */}
              <div className="border border-white/30 rounded-xl p-6 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-[#FF8A3D]/20 text-[#FF8A3D] px-3 py-1 rounded-md text-sm font-medium">PHASE 4</div>
                  <div className="text-white/60 transform -rotate-45">→</div>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovate with cross<span className="font-['Poppins'] font-bold">-</span>chain integration</h3>
                <p className="text-white/70">Innovate with cross-chain integration and strategic partnerships.</p>
              </div>
            </div>
          </div>
          
          {/* 右侧: 图片容器 */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="sticky top-8">
              <div className="w-full flex items-center justify-center">
                <Image 
                  src="/image-roadmap.png" 
                  alt="Roadmap" 
                  width={400} 
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap; 