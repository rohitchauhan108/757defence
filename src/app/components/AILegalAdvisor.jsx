'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, ShieldAlert, Sparkles, Phone, ShieldCheck } from 'lucide-react';

export default function AILegalAdvisor({ isOpen, onClose, onOpenConsultation }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Welcome to 757 Defense AI Case Evaluator. I am an intelligent legal intake assistant for Virginia Beach, Norfolk, and Chesapeake criminal defense. How may I assist with your DUI, traffic, or criminal charge questions today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [selectedArea, setSelectedArea] = useState('DUI & DWI');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/legal-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          practiceArea: selectedArea
        })
      });

      const data = await res.json();
      setLoading(false);

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'Thank you for reaching out to 757 Defense. For immediate free confidential consultation with our trial partners, please call our 24/7 Hotline at (757) 757-3333.'
          }
        ]);
      }
    } catch (err) {
      console.error('AI Advisor Error:', err);
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: '757 Defense attorneys are available 24/7. You can book a free case evaluation online or call us directly at (757) 757-3333.'
        }
      ]);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-[#0F0F0F] text-[#F5F2ED] border-l border-[#D9AD74]/30 shadow-2xl flex flex-col justify-between font-poppins">
      
      {/* Header */}
      <div className="p-4 bg-[#14120F] border-b border-[#D9AD74]/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#D9AD74] text-[#0F0F0F] flex items-center justify-center font-bold rounded-xs">
            <ShieldAlert className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-crimson text-base font-bold text-[#F5F2ED]">757 Defense AI Evaluator</h3>
              <Sparkles className="w-3.5 h-3.5 text-[#D9AD74]" />
            </div>
            <p className="text-[10px] text-[#D9AD74] uppercase tracking-wider font-medium">Confidential Virginia Legal Intake</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Practice Specialty Bar */}
      <div className="px-3 py-2 bg-[#1A1612] border-b border-[#D9AD74]/20 flex items-center gap-1.5 overflow-x-auto text-[10px] uppercase tracking-wider">
        <span className="text-[#D8D4CE]/50 shrink-0 font-bold">Charge:</span>
        {[
          'DUI & DWI',
          'Reckless Driving',
          'Domestic Assault',
          'Drug Crimes',
          'Violent Felonies',
          'Military UCMJ',
          'Expungement'
        ].map((area) => (
          <button
            key={area}
            onClick={() => setSelectedArea(area)}
            className={`px-2.5 py-1 shrink-0 transition-colors cursor-pointer rounded-xs ${
              selectedArea === area
                ? 'bg-[#D9AD74] text-[#0F0F0F] font-bold'
                : 'bg-[#0E0C0A] text-[#F5F2ED]/70 hover:bg-[#D9AD74]/10 hover:text-[#D9AD74]'
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-light">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-7 h-7 bg-[#D9AD74]/20 text-[#D9AD74] flex items-center justify-center shrink-0 border border-[#D9AD74]/30 rounded-xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-3 max-w-[85%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#D9AD74] text-[#0F0F0F] font-semibold rounded-xs'
                  : 'bg-[#181512] text-[#F5F2ED] border border-[#D9AD74]/20 rounded-xs whitespace-pre-line'
              }`}
            >
              {msg.text}
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 bg-[#1A1612] border border-white/10 text-[#F5F2ED] flex items-center justify-center shrink-0 rounded-xs">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-2.5 items-center text-[#D8D4CE]/60 text-xs">
            <div className="w-7 h-7 bg-[#D9AD74]/20 text-[#D9AD74] flex items-center justify-center shrink-0 animate-pulse rounded-xs">
              <Bot className="w-4 h-4" />
            </div>
            <span>757 Defense AI is evaluating your case...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Consultation Callout Banner */}
      <div className="p-3 bg-[#14120F] border-t border-[#D9AD74]/20 flex items-center justify-between gap-2 text-xs">
        <div className="text-[#D8D4CE]/70 text-[11px] flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#D9AD74]" />
          <span>Call 24/7: <strong>(757) 757-3333</strong></span>
        </div>
        <button
          onClick={() => {
            onClose();
            if (onOpenConsultation) onOpenConsultation(selectedArea);
          }}
          className="bg-[#D9AD74] text-[#0F0F0F] font-bold px-3 py-1.5 uppercase text-[10px] tracking-widest hover:bg-[#B88D51] rounded-xs cursor-pointer"
        >
          Book Attorney Review
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-3 bg-[#0E0C0A] border-t border-[#D9AD74]/20 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Describe your ${selectedArea} situation...`}
          className="flex-1 bg-[#181512] border border-[#D9AD74]/30 text-[#F5F2ED] px-3 py-2 text-xs focus:outline-none focus:border-[#D9AD74] rounded-xs"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="bg-[#D9AD74] hover:bg-[#B88D51] text-[#0F0F0F] p-2 disabled:opacity-50 transition-colors cursor-pointer rounded-xs"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
