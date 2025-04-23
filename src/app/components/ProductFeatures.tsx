import React from 'react';

const ProductFeatures = () => {
  return (
    <div className="bg-[#F8F5FF] py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F5F0FF] px-4 py-2 rounded-full border border-[#8A3DFF]/20 mb-4 w-fit">
            <span className="text-[#8A3DFF] font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Product Features</h2>
        </div>
        
        {/* 特性卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 特性1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#8A3DFF]/10 rounded-full flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="7" height="7" rx="1" stroke="#8A3DFF" strokeWidth="2"/>
                <rect x="4" y="13" width="7" height="7" rx="1" stroke="#8A3DFF" strokeWidth="2"/>
                <rect x="13" y="4" width="7" height="7" rx="1" stroke="#8A3DFF" strokeWidth="2"/>
                <path d="M16.5 17.5L19.5 14.5" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16.5" cy="16.5" r="3.5" stroke="#8A3DFF" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Prompt Generation</h3>
            <p className="text-gray-700">
              Users can create customized prompts using an intuitive interface. Real-time preview and editing ensure the output matches the user's vision. The platform then seamlessly mints these prompts as NFTs.
            </p>
          </div>
          
          {/* 特性2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#8A3DFF]/10 rounded-full flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="12" height="16" rx="1" stroke="#8A3DFF" strokeWidth="2"/>
                <path d="M10 12H14" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 8H14" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 16H14" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">NFT Minting</h3>
            <p className="text-gray-700">
              The platform simplifies the minting process, handling technical aspects like gas fees and smart contract deployment. Each NFT is secured on the blockchain, guaranteeing ownership and authenticity.
            </p>
          </div>
          
          {/* 特性3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#8A3DFF]/10 rounded-full flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="6" width="16" height="12" rx="1" stroke="#8A3DFF" strokeWidth="2"/>
                <path d="M9 10L12 13L15 10" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Marketplace</h3>
            <p className="text-gray-700">
              A dynamic space for buying, selling, and trading AI-generated NFTs, with advanced search, personalized recommendations, and secure transactions. The marketplace fosters community interaction through profiles, ratings, and feedback systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures; 