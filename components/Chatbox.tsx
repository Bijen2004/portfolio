'use client'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const convertMarkdownToHtml = (markdown: string) => {
    markdown = markdown.replace(
      /^(#{1,6})\s*(.*)$/gm,
      (match, hashes, content) => {
        const level = hashes.length;
        return `<h${level}>${content}</h${level}>`;
      }
    );

    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");
    markdown = markdown.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    );

    markdown = markdown.replace(/^\s*-\s+(.*)$/gm, (match, content) => {
      return `<ul><li>${content}</li></ul>`;
    });

    let counter = 0;
    markdown = markdown.replace(/^\s*\d+\.\s+(.*)$/gm, (match, content) => {
      return `<ol><li>${content}</li></ol>`;
    });

    markdown = markdown.replace(
      /```(\w*)\s*([\s\S]*?)\s*```/g,
      (match, lang, content) => {
        return `<pre><code class="${lang}">${content}</code></pre>`;
      }
    );

    markdown = markdown.replace(/`([^`]+)`/g, "<code>$1</code>");

    return markdown;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
  
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: inputValue }]);
    setInputValue('');
  
    setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: '...typing' }]);
  
    try {
      const queryData = {
        convo: [...messages,{ role: 'user', content: inputValue }],
        agent: true,
        agent_id: '66aca92623f42a885dc28ffb_BijenBot',
      };
  
      const response = await fetch('https://api.fagoon.ai/api/v1/upgrade/chat', {
        method: 'POST',
        body: JSON.stringify(queryData),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      const responseMessage = data
        ? convertMarkdownToHtml(data)
        : 'No response from server';
  
      setMessages((prevMessages) => {
        const newMessages = prevMessages.filter(msg => msg.content !== '...typing');
        return [...newMessages, { role: 'assistant', content: responseMessage }];
      });
    } catch (error) {
      setMessages((prevMessages) => {
        const newMessages = prevMessages.filter(msg => msg.content !== '...typing');
        return [...newMessages, { role: 'assistant', content: 'Sorry, please try again.' }];
      });
    }
  };

  return (
    <div className="relative z-[5000] dark:bg-gray-900">
      <div className={`fixed bottom-[80px] right-5 bg-white dark:bg-gray-700 rounded-full shadow-lg cursor-pointer hover:scale-[1.15] ${isOpen ? 'hidden' : 'flex'}`} onClick={() => setIsOpen(true)}>
        <Image src="/profile-bijen.jpg" width={48} height={48} alt="Profile Picture" className='rounded-full'/>
      </div>

      {isOpen && (
        <div className="fixed bottom-[2vh] right-[2vw] h-[96vh] w-[95vw] sm:bottom-[80px] sm:right-5 sm:w-80 sm:h-[350px] md:h-[450px] bg-gray-100 dark:bg-gray-800 rounded-t-lg shadow-lg flex flex-col">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 text-white p-3 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center gap-[20px]">
              <Image src="/profile-bijen.jpg" width={38} height={38} alt="Profile Picture" className='rounded-full'/>
              <div>
                <h4 className="text-lg font-semibold">Bijen Shrestha</h4>
                <p className="text-sm">Software Engineer</p>
              </div>
            </div>
            <button className="text-xl" onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 dark:bg-gray-900">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 p-2 text-sm rounded-lg ${msg.role === 'user' ? 'bg-purple-600 text-white ml-auto w-4/5' : 'bg-gray-300 dark:bg-gray-700 w-4/5'}`}>
                <div dangerouslySetInnerHTML={{ __html: msg.content }} />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 p-3 pb-1 gap-1 flex flex-col items-center">
              <div className='flex items-center'>
                <input
              type="text"
              className="flex-1 p-2 rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="Write a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button
              className="bg-red-500 dark:bg-red-700 text-white p-2 rounded-lg ml-2"
              onClick={handleSendMessage}
            >
              Send
            </button>
                </div>

                
            <div className='text-xs py-[2px] text-white'>
              Powered by <span className='font-bold cursor-pointer'><a href="https://aifagoon.com/" target='_blank'>Fagoon AI</a></span>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
