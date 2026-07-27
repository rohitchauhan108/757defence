import Link from 'next/link';
import { notFound } from 'next/navigation';
import data2 from './data'; // Make sure this path correctly points to your data2 file

// 1. Generate static routes at build time for data2 slugs
export function generateStaticParams() {
  if (!data2 || !Array.isArray(data2)) {
    return [];
  }
  return data2.map((item) => ({
    slug: String(item.slug),
  }));
}

// 2. Main dynamic page component for data2 items
export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // Find the specific record matching the slug in data2
  const offense = data2.find((item) => item.slug === slug);

  if (!offense) {
    notFound();
  }

  return (
    <div className="bg-[#080808] min-h-screen text-neutral-100 flex flex-col justify-between">
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
        {/* Subtle background glow elements */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-12 w-full">
          
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

          {/* Section Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {offense.title}
            </h1>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
          </div>

          {/* Split Content Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Side: Image card with asymmetric borders */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-amber-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-[#141414] border border-[#d4af37]/30 shadow-2xl">
                {offense.img ? (
                  <img 
                    src={offense.img} 
                    alt={offense.title} 
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-500">No Image Available</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">We Can Help</span>
                  <h4 className="text-2xl font-bold text-white mt-1">{offense.title}</h4>
                </div>
              </div>
            </div>

            {/* Right Side: Editorial text content cards */}
            <div className="lg:col-span-7 space-y-6">
              
              {offense.dis1 && (
                <div className="bg-[#121212] p-8 rounded-2xl border border-[#d4af37]/20 shadow-lg relative">
                  <p className="text-neutral-200 text-lg leading-relaxed pt-2">
                    {offense.dis1}
                  </p>
                </div>
              )}

              {offense.dis2 && (
                <div className="bg-[#161616] p-8 rounded-2xl border border-neutral-800 shadow-lg relative">
                  <p className="text-neutral-300 text-base leading-relaxed pt-2">
                    {offense.dis2}
                  </p>
                </div>
              )}

              {/* Inline Action Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#d4af37] text-[#0a0a0a] font-bold text-sm tracking-wide hover:bg-[#e6be40] transition-all shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  Contact Us
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Legal Disclaimer Footer (Centered & Constrained) */}
      <footer className="w-fit mx-auto bg-[#0e0e0e] border-t border-[#d4af37]/20 py-8 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl shadow-xl">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed border-l-4 border-r-4 border-[#d4af37] pl-5 pr-5 text-center sm:text-left">
            <strong className="font-semibold text-neutral-200">LEGAL DISCLAIMER :</strong> The use of the internet or the email contact form for communication does not establish an attorney-client relationship. Karpov Law PLLC, and attorney Anton A. Karpov do not guarantee any particular outcome of the representation. Every case is different and fact-specific, and the results obtained will be related to the facts and merits of the particular case.
          </p>
        </div>
      </footer>
    </div>
  );
}