"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollColorChangeProps {
  children: string;
  startColor?: string;
  endColor?: string;
  className?: string;
}

const ScrollColorChange = ({
  children,
  startColor = "rgb(0, 0, 0)",
  endColor = "rgb(106, 90, 224)",
  className = ""
}: ScrollColorChangeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<string[]>([]);
  const [chars, setChars] = useState<{char: string, wordIndex: number}[]>([]);
  const [visibilityArray, setVisibilityArray] = useState<number[]>([]);
  
  // 首先按单词分割，保留单词间的空格
  useEffect(() => {
    // 将文本按单词分割，保留原有格式
    const splitWords = children.split(/(\s+)/);
    setWords(splitWords);
    
    // 然后将每个单词的每个字符提取出来，并记住它属于哪个单词
    let allChars: {char: string, wordIndex: number}[] = [];
    splitWords.forEach((word, wordIndex) => {
      word.split('').forEach(char => {
        allChars.push({char, wordIndex});
      });
    });
    
    setChars(allChars);
    setVisibilityArray(new Array(allChars.length).fill(0));
  }, [children]);
  
  // 每行大约有多少个字符
  const charsPerLine = 80;
  
  // 监听滚动事件，根据容器位置计算可见度
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const calculateVisibility = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 容器顶部距离窗口顶部的距离
      const topOffset = rect.top;
      // 计算容器在视口中的位置 (0-1)，0表示刚进入底部，1表示达到顶部
      const containerVisibility = 1 - (topOffset / windowHeight);
      
      // 只有当容器接近中央位置时才开始变色
      if (containerVisibility > 0.3 && containerVisibility < 0.9) {
        // 计算有多少字符应该变色
        const totalChars = chars.length;
        const visibleRatio = (containerVisibility - 0.3) / 0.6; // 归一化到0-1
        const visibleChars = Math.floor(totalChars * visibleRatio);
        
        setVisibilityArray(prev => {
          const newArray = [...prev];
          
          // 按行从上到下，每行从左到右变色
          for (let i = 0; i < totalChars; i++) {
            // 计算字符在哪一行
            const line = Math.floor(i / charsPerLine);
            // 计算字符在当前行的位置
            const posInLine = i % charsPerLine;
            // 计算总体字符的顺序号(考虑行和列)
            const orderIndex = line * charsPerLine + posInLine;
            
            // 如果字符应该变色
            if (orderIndex < visibleChars) {
              newArray[i] = 1;
            } else {
              newArray[i] = 0;
            }
          }
          
          return newArray;
        });
      } 
      // 如果容器已经滚出视口上方，全部变回黑色
      else if (containerVisibility >= 0.9) {
        setVisibilityArray(prev => prev.map(() => 1));
      }
      // 如果容器还没进入合适的位置，全部保持黑色
      else {
        setVisibilityArray(prev => prev.map(() => 0));
      }
    };
    
    // 初始计算
    calculateVisibility();
    
    // 添加滚动监听
    window.addEventListener('scroll', calculateVisibility);
    
    return () => {
      window.removeEventListener('scroll', calculateVisibility);
    };
  }, [chars, charsPerLine]);
  
  return (
    <div ref={containerRef} className={`leading-relaxed ${className}`}>
      {chars.map((charObj, index) => (
        <span
          key={index}
          className="char"
          style={{
            color: visibilityArray[index] ? endColor : startColor,
            transition: 'color 0.8s ease-in-out',
            whiteSpace: 'pre-wrap', // 保留空格和换行
          }}
        >
          {charObj.char}
        </span>
      ))}
    </div>
  );
};

export default ScrollColorChange; 