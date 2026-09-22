import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '../data';

// 1. Generate static routes at build time
export function generateStaticParams() {
  return data.map((offense) => ({
    slug: offense.slug,
  }));
}

// 2. Main page component
export default async function OffensePage({ params }) {
  const { slug } = await params;

  // Find the specific offense data matching the slug
  const offense = data.find((item) => item.slug === slug);

  if (!offense) {
    notFound();
  }

  return (
    <>
    {/* for first data */}
    <main 
      className="min-h-screen w-full bg-cover bg-center bg-fixed relative py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/criminal-offenses/main.jpg')` }}
    >
      {/* Dark gradient overlay matching the luxury brand theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#111111]/80 to-[#0a0a0a]/95 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Back Navigation */}
        <nav>
          <Link
            href="/"
            className="group inline-flex items-center text-sm font-medium text-neutral-300 hover:text-[#d4af37] transition-colors bg-[#141414]/80 hover:bg-[#1a1a1a] px-4 py-2 rounded-full backdrop-blur-sm border border-[#d4af37]/20 shadow-lg"
          >
            <svg
              className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 text-[#d4af37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
        </nav>

        {/* Main Article Container */}
        <article className="group bg-[#121212]/95 backdrop-blur-md rounded-3xl border border-[#d4af37]/20 shadow-2xl overflow-hidden flex flex-col text-neutral-100">
          
          {/* Hero Image with Title Overlay */}
          {offense.img ? (
            <div className="relative w-full h-80 sm:h-[28rem] bg-[#0a0a0a] overflow-hidden">
              <img
                src={offense.img}
                alt={offense.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-70"
              />
              {/* Refined Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 space-y-4 z-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-inset ring-[#d4af37]/30 px-4 py-1.5 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                    We Can Help
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
                  {offense.title}
                </h1>
              </div>
            </div>
          ) : (
            /* Fallback Header if no image exists */
            <div className="p-8 sm:p-12 border-b border-[#d4af37]/25 bg-[#0e0e0e] text-white space-y-4">
               <span className="inline-flex items-center rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-inset ring-[#d4af37]/30 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                We Can Help
               </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {offense.title}
              </h1>
            </div>
          )}

          {/* Content Body */}
          <div className="p-8 sm:p-12 space-y-8 bg-[#121212]">
            
            {/* Description 1 */}
            {offense.dis1 && (
              <div className="prose prose-invert max-w-none">
                <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-medium">
                  {offense.dis1}
                </p>
              </div>
            )}
            
            {/* Divider */}
            {offense.dis1 && offense.dis2 && (
              <div className="w-16 h-1 bg-[#d4af37] rounded-full my-8"></div>
            )}

            {/* Description 2 */}
            {offense.dis2 && (
              <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#d4af37]/15">
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  {offense.dis2}
                </p>
              </div>
            )}

            {/* CALL TO ACTION SECTION */}
            <div className="mt-10 pt-10 border-t border-[#d4af37]/20 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#161616]">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">Get professional legal counsel immediately.</h3>
              </div>
              
              <Link 
                href="/contact" 
                className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all duration-200 bg-[#d4af37] rounded-xl hover:bg-[#e6be40] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] w-full sm:w-auto"
              >
                Contact Us
                <svg 
                  className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover/btn:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Legal Disclaimer Footer */}
          <div className="bg-[#0e0e0e] p-6 sm:p-8 border-t border-[#d4af37]/20 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed border-l-4 border-r-4 border-[#d4af37] pl-5 pr-5">
              <strong className="font-semibold text-neutral-200">LEGAL DISCLAIMER:</strong> The use of the internet or the email contact form for communication does not establish an attorney-client relationship. Karpov Law PLLC, and attorney Anton A. Karpov do not guarantee any particular outcome of the representation. Every case is different and fact-specific, and the results obtained will be related to the facts and merits of the particular case.
            </p>
          </div>
          
        </article>
      </div>
    </main>
    </>
  );
}