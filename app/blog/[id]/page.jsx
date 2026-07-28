import React from 'react';
import { blogPosts } from '@/app/data/blogPosts';
import Link from 'next/link';
import { ArrowLeft, Share2, Bookmark, Sparkles, Compass } from 'lucide-react';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

async function getBlogPost(id) {
    const post = blogPosts.find((p) => p.id === id);
    return post || null;
}

export default async function BlogDetailsPage({ params }) {
    const { id } = await params;
    const post = await getBlogPost(id);

    if (!post) {
        return (
            <div className="bg-[#0A0A0A] text-[#F5F2ED] min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/[02] border border-white/10 flex items-center justify-center shadow-2xl">
                    <span className="font-serif text-2xl text-[#D9AD74] italic">404</span>
                </div>
                <div className="space-y-2">
                    <h1 className="font-serif text-3xl font-light tracking-wide text-[#F5F2ED]">Chronicle Not Found</h1>
                    <p className="text-[#F5F2ED]/50 text-sm font-light max-w-xs mx-auto">
                        This manuscript has vanished from the archives or never existed.
                    </p>
                </div>
                <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-3 bg-[#D9AD74] text-[#0A0A0A] font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:bg-[#c89b62] transition-all shadow-lg shadow-[#D9AD74]/10"
                >
                    <ArrowLeft className="w-4 h-4" /> Return to Archives
                </Link>
            </div>
        );
    }

    // Find related articles (same category or next few posts)
    const relatedPosts = blogPosts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    return (
        <div className="bg-[#0A0A0A] text-[#F5F2ED] min-h-screen selection:bg-[#D9AD74] selection:text-[#0A0A0A] font-sans antialiased relative overflow-hidden">
            
            {/* Atmospheric Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9AD74]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

            {/* Asymmetric Split Layout Container */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-24 lg:grid lg:grid-cols-12 lg:gap-16 relative z-10">
                
                {/* Left Sidebar / Floating Navigation Column (Sticky on Desktop) */}
                <aside className="lg:col-span-3 lg:sticky lg:top-12 h-fit space-y-8 mb-12 lg:mb-0">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2.5 text-xs text-[#D9AD74] uppercase tracking-[0.2em] hover:text-white transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full border border-[#D9AD74]/30 flex items-center justify-center group-hover:border-[#D9AD74] transition-colors">
                            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                        </div>
                        <span>Directory</span>
                    </Link>

                    {/* Metadata Box */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md space-y-6">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD74] block mb-1 font-medium">Category</span>
                            <span className="font-serif text-lg text-[#F5F2ED]">{post.category}</span>
                        </div>

                        <div className="w-full h-[1px] bg-white/10" />

                        <div className="space-y-4 text-xs text-[#F5F2ED]/60 uppercase tracking-widest">
                            <div>
                                <span className="block text-[10px] text-white/30 mb-0.5">Author</span>
                                <span className="text-[#F5F2ED] font-medium normal-case text-sm font-serif">{post.author}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] text-white/30 mb-0.5">Published</span>
                                <span>{post.date}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] text-white/30 mb-0.5">Read Duration</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-white/10" />

                        {/* Action Triggers */}
                        <div className="flex items-center gap-3 pt-2">
                            <button 
                                aria-label="Bookmark entry"
                                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-[#F5F2ED]/80 hover:bg-[#D9AD74] hover:text-[#0A0A0A] hover:border-[#D9AD74] transition-all"
                            >
                                <Bookmark className="w-3.5 h-3.5" /> Save
                            </button>
                            <button 
                                aria-label="Share entry"
                                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-[#F5F2ED]/80 hover:bg-[#D9AD74] hover:text-[#0A0A0A] hover:border-[#D9AD74] transition-all"
                            >
                                <Share2 className="w-3.5 h-3.5" /> Share
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Article Content Column */}
                <main className="lg:col-span-9 space-y-12">
                    
                    {/* Header: Title & Intro Over Image or Above Image */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-[#D9AD74]/10 border border-[#D9AD74]/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-[#D9AD74] uppercase tracking-[0.2em]">
                            <Sparkles className="w-3 h-3" /> Featured Article
                        </div>

                        <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F2ED] leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>
                    </div>

                    {/* Cinematic Immersive Image Frame */}
                    <div className="relative h-[380px] sm:h-[520px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10" />
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            referrerPolicy="no-referrer"
                        />
                    </div>

                    {/* Editorial Content Layout */}
                    <div className="max-w-3xl pt-6">
                        <div className="text-[#F5F2ED]/85 text-lg font-light leading-[1.9] whitespace-pre-line space-y-8 selection:bg-[#D9AD74] selection:text-[#0A0A0A] first-letter:text-5xl first-letter:font-serif first-letter:text-[#D9AD74] first-letter:mr-3 first-letter:float-left">
                            {post.content}
                        </div>
                    </div>

                    {/* Author Signature Footer Card */}
                    <div className="max-w-3xl mt-16 p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                        <div className="flex items-center gap-4 text-center sm:text-left">
                            <div className="w-16 h-16 rounded-2xl bg-[#D9AD74]/10 border border-[#D9AD74]/30 flex items-center justify-center font-serif text-[#D9AD74] text-2xl font-bold shadow-inner">
                                {post.author ? post.author.charAt(0) : 'E'}
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9AD74] font-medium block mb-1">Curated By</span>
                                <h3 className="font-serif text-xl text-[#F5F2ED]">{post.author}</h3>
                                <p className="text-xs text-[#F5F2ED]/50 font-light mt-0.5">Contributor & Editorial Writer</p>
                            </div>
                        </div>

                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/10 text-xs font-medium uppercase tracking-[0.2em] px-6 py-3.5 rounded-xl transition-all"
                        >
                            <Compass className="w-4 h-4 text-[#D9AD74]" /> All Chronicles
                        </Link>
                    </div>

                    {/* Related Post Suggestions (if available) */}
                    {relatedPosts.length > 0 && (
                        <div className="max-w-3xl pt-12 space-y-6">
                            <h4 className="text-xs font-medium uppercase tracking-[0.25em] text-[#D9AD74]">Related Readings</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {relatedPosts.map((relPost) => (
                                    <Link 
                                        key={relPost.id} 
                                        href={`/blog/${relPost.id}`}
                                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D9AD74]/40 transition-all group flex flex-col justify-between space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <span className="text-[10px] uppercase tracking-wider text-[#D9AD74]">{relPost.category}</span>
                                            <h5 className="font-serif text-base text-[#F5F2ED] group-hover:text-[#D9AD74] transition-colors line-clamp-2">
                                                {relPost.title}
                                            </h5>
                                        </div>
                                        <span className="text-[11px] text-[#F5F2ED]/40 uppercase tracking-widest">{relPost.readTime}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}