'use client';
import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I am your AI Business Assistant. Ask me anything about your CRM metrics or sales performance.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = "I've analyzed the data. Your revenue is up 12.5% this month, mostly driven by high-value conversions from premium users.";
      if (input.toLowerCase().includes('customer') || input.toLowerCase().includes('client')) {
        aiText = "You currently have 1,248 active customers. Sarah Miller and Alex Johnson generated the highest volume today.";
      } else if (input.toLowerCase().includes('help') || input.toLowerCase().includes('conversion')) {
        aiText = "Conversion rate dropped slightly by 0.4%. I recommend optimizing the checkout step for mobile users to counter this.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiText, sender: 'ai' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col h-[500px] shadow-xl overflow-hidden">
      <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center space-x-2">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <h3 className="font-semibold text-sm text-slate-100">AI Assistant</h3>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
              msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-400 text-xs px-4 py-2.5 rounded-2xl rounded-bl-none animate-pulse">
              Analyzing metrics...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="p-4 bg-slate-950 border-t border-slate-800 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about sales trends..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
          Send
        </button>
      </form>
    </div>
  );
}
