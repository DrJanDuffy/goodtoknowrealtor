'use client';

import { useState } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const quickReplies = [
  'What\'s my home worth?',
  'Show me listings',
  'Schedule a consultation',
  'Market report'
];

const botResponses: { [key: string]: string } = {
  'home worth': 'I\'d be happy to help you get an accurate home valuation! Click here to get your free, instant home value report.',
  'listings': 'Let me show you the latest Las Vegas listings that match your criteria.',
  'consultation': 'Perfect! I\'d love to schedule a consultation with you. What works better for you - a call or in-person meeting?',
  'market report': 'I can provide you with the latest Las Vegas market insights. Would you like the full market report?'
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi! I\'m here to help with your Las Vegas real estate needs. What can I assist you with today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      let response = 'I understand you\'re interested in Las Vegas real estate. Let me connect you with Dr. Jan Duffy for personalized assistance.';

      if (lowerMessage.includes('worth') || lowerMessage.includes('value')) {
        response = botResponses['home worth'];
      } else if (lowerMessage.includes('listing') || lowerMessage.includes('home')) {
        response = botResponses['listings'];
      } else if (lowerMessage.includes('consultation') || lowerMessage.includes('meeting')) {
        response = botResponses['consultation'];
      } else if (lowerMessage.includes('market') || lowerMessage.includes('report')) {
        response = botResponses['market report'];
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className='fixed bottom-4 left-4 z-40'>
          <button
            onClick={() => setIsOpen(true)}
            className='bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center'
            aria-label='Open chat'
          >
            <IconSymbol symbol='💬' className='h-6 w-6 text-white' ariaLabel='Open chat' />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className='fixed bottom-4 left-4 z-40 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col'>
          {/* Header */}
          <div className='bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between'>
            <div>
              <h3 className='font-semibold'>Dr. Jan Duffy</h3>
              <p className='text-xs text-blue-100'>Top 1% Las Vegas Agent</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='text-white hover:text-gray-200 transition-colors'
              aria-label='Close chat'
            >
              <IconSymbol symbol='✕' className='h-4 w-4 text-white' ariaLabel='Close chat' />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto p-4 space-y-3'>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className='flex justify-start'>
                <div className='bg-gray-100 text-gray-900 p-3 rounded-lg text-sm'>
                  <div className='flex space-x-1'>
                    <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                    <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.1s' }}></div>
                    <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className='p-2 border-t border-gray-200'>
            <div className='flex flex-wrap gap-2 mb-2'>
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors'
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className='p-4 border-t border-gray-200'>
            <div className='flex space-x-2'>
              <input
                type='text'
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(currentMessage)}
                placeholder='Type your message...'
                className='flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                onClick={() => handleSendMessage(currentMessage)}
                className='bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors'
              >
                <IconSymbol symbol='→' className='h-4 w-4' ariaLabel='Send message' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
