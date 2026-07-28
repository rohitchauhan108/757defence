'use client';

import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts.js';
import { BookOpen, X, Calendar, User, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useApp } from '../AppContext.jsx';

export default function BlogPage() {
  const router = useRouter();
  const { onOpenConsultation } = useApp();
  const [activePost, setActivePost] = useState(null);

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Featured Post (Top) */}
        {featuredPost && (
          <div
            onClick={() => setActivePost(featuredPost)}
            className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9AD74]/50 transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div className="lg:col-span-7 h-72 lg:h-auto overflow-hidden relative bg-[#0F0F0F]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-sm text-[#D9AD74] text-[10px] font-bold px-3 py-1 rounded border border-[#D9AD74]/30 uppercase tracking-wider">
                Featured Article • {featuredPost.category}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] text-[#F5F2ED]/40 uppercase tracking-wider font-medium">
                  <span>By {featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-[#F5F2ED]/60 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#D9AD74] text-xs font-bold uppercase tracking-widest pt-4 border-t border-white/10">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Remaining Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
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
                  <p className="text-[#F5F2ED]/60 text-xs font-light leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between text-[10px] text-[#F5F2ED]/40 uppercase tracking-wider font-medium mt-4">
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