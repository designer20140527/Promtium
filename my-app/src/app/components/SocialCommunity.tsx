import React from 'react';

const SocialCommunity = () => {
  return (
    <div className="bg-[#F8F5FF] py-24 bg-contain bg-bottom bg-no-repeat" style={{ backgroundImage: 'url(/image-community.png)' }}>
      <div className="max-w-[1400px] mx-auto px-4">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Social and Community Features</h2>
        </div>
        
        {/* 两栏布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* 左侧卡片 */}
          <div className="bg-white p-10 rounded-xl shadow-sm">
            <div className="mb-8">
              <div className="w-14 h-14 bg-[#8A3DFF]/10 rounded-full flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Users can work together on projects, contributing to the creation of NFTs. The platform offers tools for communication, resource sharing, and project management.
            </p>
          </div>
          
          {/* 右侧卡片 */}
          <div className="bg-white p-10 rounded-xl shadow-sm">
            <div className="mb-8">
              <div className="w-14 h-14 bg-[#8A3DFF]/10 rounded-full flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.59 13.51L15.42 17.49" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.41 6.51L8.59 10.49" stroke="#8A3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Sharing</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Social media-like features allow users to share creations, gain visibility, and build reputations within the community. Challenges and events keep the community engaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCommunity; 