import React from 'react';
import Image from 'next/image';

const VisionMission = () => {
  return (
    <>
      <div className="bg-[#F8F5FF] py-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 左侧: Vision and Mission */}
            <div>
              {/* Subtitle */}
              <div className="inline-block bg-[#FFF5F0] px-4 py-2 rounded-full border border-[#FF8A3D]/20 mb-4">
                <span className="text-[#FF8A3D] font-medium">Introduction</span>
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision and Mission</h2>
              
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  The vision of this project is to redefine digital creation by expanding the boundaries of human creativity through the capabilities of AI. By harnessing the synergy between AI and blockchain, the project envisions a future where digital content creation is accessible to all and enriched by the limitless possibilities offered by AI.
                </p>
                <p>
                  The mission is to provide a user-centric platform that enables individuals to generate, mint, and trade AI-powered prompts as NFTs, thus participating in the emerging digital economy with ease and confidence.
                </p>
              </div>
            </div>
            
            {/* 右侧: Key Concepts */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="font-bold text-xl mb-3">Artificial Intelligence <span className="font-sans font-bold">(AI)</span></h3>
                <p className="text-gray-700">
                  Artificial Intelligence (AI) is a branch of computer science dedicated to building systems capable of performing tasks that typically require human intelligence.
                </p>
              </div>
              
              <div className="w-full h-px bg-gray-200 my-4"></div>
              
              <div>
                <h3 className="font-bold text-xl mb-3">Non<span className="font-sans font-bold">-</span>Fungible Tokens <span className="font-sans font-bold">(NFTs)</span></h3>
                <p className="text-gray-700">
                  Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership or proof of authenticity of a specific item or piece of content on a blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partners Section */}
      <div className="bg-[#F8F5FF] pt-2 pb-20">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* 超大屏幕显示所有伙伴 */}
          <div className="hidden xl:flex justify-center items-center">
            <div className="flex space-x-8 items-center">
              <div className="flex items-center h-20 w-52 justify-center">
                <Image 
                  src="/partner-1.svg" 
                  alt="Partner 1" 
                  width={160} 
                  height={50}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="h-12 w-[1px] bg-gray-400"></div>
              
              <div className="flex items-center h-20 w-52 justify-center">
                <Image 
                  src="/partner-2.svg" 
                  alt="Partner 2" 
                  width={160} 
                  height={50}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="h-12 w-[1px] bg-gray-400"></div>
              
              <div className="flex items-center h-20 w-52 justify-center">
                <Image 
                  src="/partner-3.svg" 
                  alt="Partner 3" 
                  width={160} 
                  height={50}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="h-12 w-[1px] bg-gray-400"></div>
              
              <div className="flex items-center h-20 w-52 justify-center">
                <Image 
                  src="/partner-4.svg" 
                  alt="Partner 4" 
                  width={160} 
                  height={50}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="h-12 w-[1px] bg-gray-400"></div>
              
              <div className="flex items-center h-20 w-52 justify-center">
                <Image 
                  src="/partner-5.svg" 
                  alt="Partner 5" 
                  width={160} 
                  height={50}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
          
          {/* 中小屏幕网格布局（包括1024宽度） */}
          <div className="xl:hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center h-20">
                <Image 
                  src="/partner-1.svg" 
                  alt="Partner 1" 
                  width={140} 
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center h-20">
                <Image 
                  src="/partner-2.svg" 
                  alt="Partner 2" 
                  width={140} 
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center h-20">
                <Image 
                  src="/partner-3.svg" 
                  alt="Partner 3" 
                  width={140} 
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center h-20 col-span-1 md:col-span-2">
                <Image 
                  src="/partner-4.svg" 
                  alt="Partner 4" 
                  width={140} 
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center justify-center h-20 col-span-1">
                <Image 
                  src="/partner-5.svg" 
                  alt="Partner 5" 
                  width={140} 
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission; 