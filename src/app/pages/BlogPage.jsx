'use client';

import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts.js';
import { BookOpen, Search, X, Calendar, User } from 'lucide-react';

export default function BlogPage({ navigate, onOpenConsultation }) {
  const [activePost, setActivePost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0F0F0F] text-[#F5F2ED] min-h-screen pb-16 space-y-12 font-sans">
      
      {/* Header */}
      <div className="bg-[#141414] border-b border-white/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-[#D9AD74] text-xs uppercase tracking-[0.3em] font-medium block">
            Legal Insights & Analysis
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F2ED]">LawOne Legal Blog</h1>
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Articles, corporate regulatory updates, and rights guides published by LawOne partners.
          </p>

          <div className="max-w-md mx-auto pt-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal articles..."
              className="w-full bg-[#1A1A1A] border border-white/10 text-[#F5F2ED] placeholder:text-[#F5F2ED]/40 text-xs pl-10 pr-4 py-3 focus:outline-none focus:border-[#D9AD74]"
            />
            <Search className="w-4 h-4 text-[#F5F2ED]/40 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-[#141414] border border-white/10 rounded-xl overflow-hidden hover:border-[#D9AD74]/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 bg-[#0F0F0F] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#141414]/90 backdrop-blur-sm text-[#D9AD74] text-[10px] font-bold px-2.5 py-1 rounded border border-[#D9AD74]/30 uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#F5F2ED]/60 text-xs font-light leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between text-[10px] text-[#F5F2ED]/40 uppercase tracking-wider font-medium">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in font-sans">
          <div className="bg-[#141414] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#F5F2ED] p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-2 rounded text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:bg-white/5 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2 border-b border-white/10 pb-4">
              <span className="text-[10px] font-bold text-[#D9AD74] uppercase tracking-widest">{activePost.category}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2ED]">{activePost.title}</h2>
              <div className="text-[10px] text-[#F5F2ED]/50 uppercase tracking-wider flex items-center gap-4">
                <span>By {activePost.author}</span>
                <span>•</span>
                <span>Published {activePost.date}</span>
              </div>
            </div>

            <div className="h-64 rounded-xl overflow-hidden bg-[#0F0F0F]">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-[#F5F2ED]/70 text-xs font-light leading-relaxed whitespace-pre-line space-y-4">
              {activePost.content}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#F5F2ED]/50 font-light">Have questions about this topic?</span>
              <button
                onClick={() => {
                  const topic = activePost.category;
                  setActivePost(null);
                  onOpenConsultation(topic);
                }}
                className="bg-[#D9AD74] text-[#0F0F0F] font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#B88D51] transition-colors"
              >
                Schedule Legal Consult
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
