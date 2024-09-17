// src/components/CodeHighlighter.tsx
"use client"; // 這是一個客戶端組件

import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 選擇喜歡的主題

interface CodeHighlighterProps {
  contentHtml: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ contentHtml }) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement); // 對代碼區塊進行語法高亮
    });
  }, [contentHtml]);

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
};

export default CodeHighlighter;
