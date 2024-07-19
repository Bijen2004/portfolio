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
      const collection = 'bjnshr789789airesponse';
      const queryData = {
        query: inputValue,
        collection_name: collection,
      };
  
      const response = await fetch('https://immi-api.fagoondigital.com/query', {
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
  
      // Check if data.response is defined and not null
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
    <div className="relative z-[5000]">
      <div className={`fixed bottom-[80px] right-5 bg-white rounded-full shadow-lg cursor-pointer hover:scale-[1.15] ${isOpen ? 'hidden' : 'flex'}`} onClick={() => setIsOpen(true)}>
        <Image src="/profile-bijen.jpg" width={48} height={48} alt="Profile Picture" className='rounded-full'/>
      </div>

      {isOpen && (
        <div className="fixed bottom-[2vh] right-[2vw] h-[96vh] w-[93vw] md:bottom-[80px] md:right-5 md:w-80 md:h-[450px] bg-gray-100 rounded-t-lg shadow-lg flex flex-col">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center gap-[20px]">
            <Image src="/profile-bijen.jpg" width={38} height={38} alt="Profile Picture" className='rounded-full'/>
              <div>
                <h4 className="text-lg font-semibold">Bijen Shrestha</h4>
                <p className="text-sm">Software Engineer</p>
              </div>
            </div>
            <button className="text-xl" onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 p-2 rounded-lg ${msg.role === 'user' ? 'bg-purple-600 text-white ml-auto w-4/5' : 'bg-gray-300 w-4/5'}`}>
                <div dangerouslySetInnerHTML={{ __html: msg.content }} />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 flex items-center">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg"
              placeholder="Write a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button
              className="bg-red-500 text-white p-2 rounded-lg ml-2"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
