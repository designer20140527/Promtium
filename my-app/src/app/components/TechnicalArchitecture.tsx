import React from 'react';
import Image from 'next/image';

const TechnicalArchitecture = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左侧: 图片 */}
          <div className="flex items-center justify-center order-last md:order-first">
            <div className="w-full flex items-center justify-center">
              <Image 
                src="/image-tech.png" 
                alt="Technical Architecture" 
                width={600} 
                height={450}
                className="rounded-lg"
              />
            </div>
          </div>
          
          {/* 右侧: 内容 */}
          <div className="flex flex-col justify-center">
            {/* Subtitle */}
            <div className="inline-block bg-[#F5FFF0] px-4 py-2 rounded-full border border-[#3DFF8A]/20 mb-4 w-fit">
              <span className="text-[#3DFF8A] font-medium">Technology</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Architecture</h2>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                Promtium combines advanced AI with a robust blockchain infrastructure. Users generate prompts through an AI model trained on diverse datasets, which are then minted as NFTs on a scalable blockchain. The platform ensures security and efficiency, with smart contracts automating the minting and trading processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArchitecture; 