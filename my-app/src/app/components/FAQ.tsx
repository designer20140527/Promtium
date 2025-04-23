"use client";

import React, { useState } from 'react';

const FAQ = () => {
  // 状态管理：跟踪每个FAQ项的打开/关闭状态
  const [openItem, setOpenItem] = useState<number | null>(0); // 默认打开第一个
  
  // 切换FAQ项的打开/关闭状态
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <div className="bg-[#121212] py-24 text-white">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* 标题和标签居中 */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#222222] px-4 py-2 rounded-full border border-white/10 mb-4">
            <span className="text-white/80 font-medium">Support</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">FAQs</h2>
        </div>
        
        {/* FAQ列表 */}
        <div className="space-y-6">
          {/* 问题1 */}
          <div className="border border-white/30 rounded-xl overflow-hidden hover:bg-white/5 transition-colors">
            <button 
              className="w-full p-6 flex justify-between items-center text-left" 
              onClick={() => toggleItem(0)}
            >
              <h3 className="text-xl font-bold pr-4">
                How do I generate AI<span className="font-['Poppins'] font-bold">-</span>prompts on the platform?
              </h3>
              <div className={`text-white/60 transition-transform duration-300 ${openItem === 0 ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${openItem === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-4 text-white/70 border-t border-white/10">
                Navigate to the prompt generation tool, input your desired parameters, and the AI will generate a unique prompt tailored to your inputs. You can customize and edit the prompt in real-time before minting it as an NFT.
              </div>
            </div>
          </div>
          
          {/* 问题2 */}
          <div className="border border-white/30 rounded-xl overflow-hidden hover:bg-white/5 transition-colors">
            <button 
              className="w-full p-6 flex justify-between items-center text-left" 
              onClick={() => toggleItem(1)}
            >
              <h3 className="text-xl font-bold pr-4">
                What is the process for minting an AI<span className="font-['Poppins'] font-bold">-</span>generated prompt into an NFT?
              </h3>
              <div className={`text-white/60 transition-transform duration-300 ${openItem === 1 ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${openItem === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-4 text-white/70 border-t border-white/10">
                After finalizing your prompt, select the minting option. The platform will guide you through the process, handling all technical aspects like gas fees and smart contract deployment. Your prompt will then be securely minted as a unique NFT on the blockchain.
              </div>
            </div>
          </div>
          
          {/* 问题3 */}
          <div className="border border-white/30 rounded-xl overflow-hidden hover:bg-white/5 transition-colors">
            <button 
              className="w-full p-6 flex justify-between items-center text-left" 
              onClick={() => toggleItem(2)}
            >
              <h3 className="text-xl font-bold pr-4">
                How are tokens distributed within the platform<span className="font-['Poppins'] font-bold">'</span>s ecosystem?
              </h3>
              <div className={`text-white/60 transition-transform duration-300 ${openItem === 2 ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${openItem === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-4 text-white/70 border-t border-white/10">
                The token distribution is as follows: 60% allocated to liquidity, 20% for staking rewards, 10% for marketing efforts, and 10% for community initiatives and team incentives. This structure ensures stability, user engagement, and long-term growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 