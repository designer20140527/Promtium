"use client";

import Image from 'next/image';

const ImageMarquee = () => {
  // 使用多种NFT图片
  const nftImages = [
    '/nft-1.webp',
    '/nft-2.png',
    '/nft-3.png',
    '/nft-4.gif',
    '/nft-5.gif',
    '/nft-6.png'
  ];

  return (
    <div className="bg-white pt-0 pb-20">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* 简单滚动容器 */}
        <div className="overflow-hidden relative">
          {/* 左侧渐变 */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* 简单走马灯 */}
          <div 
            className="flex whitespace-nowrap gap-6"
            style={{
              animation: 'scroll 20s linear infinite',
              width: 'max-content'
            }}
          >
            {/* 第一组图片 */}
            {nftImages.map((src, i) => (
              <div key={`a-${i}`} className="w-[240px] h-[240px] relative inline-block">
                <Image
                  src={src}
                  alt={`NFT ${i+1}`}
                  fill
                  className="object-cover rounded-xl"
                  unoptimized={src.endsWith('.gif')}
                />
              </div>
            ))}
            
            {/* 重复一组图片以实现无缝滚动 */}
            {nftImages.map((src, i) => (
              <div key={`b-${i}`} className="w-[240px] h-[240px] relative inline-block">
                <Image
                  src={src}
                  alt={`NFT ${i+1}`}
                  fill
                  className="object-cover rounded-xl"
                  unoptimized={src.endsWith('.gif')}
                />
              </div>
            ))}
          </div>
          
          {/* 右侧渐变 */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ImageMarquee; 