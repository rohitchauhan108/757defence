import { Cinzel, Crimson_Pro, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout.jsx";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title:
    "757 Defense - Premier Criminal Defense & DUI Lawyers | Hampton Roads, VA",
  description:
    "Top-rated criminal defense attorneys Anton Karpov & Gregory Pugh serving Virginia Beach, Norfolk, Chesapeake, Portsmouth, Hampton & Newport News. 24/7 free case review. Call (757) 907-9075.",
  keywords:
    "criminal defense attorney, DUI lawyer, traffic ticket, Virginia Beach, Norfolk, Chesapeake, Hampton Roads, 757 Defense, Anton Karpov",
  authors: [{ name: "757 Defense" }],
  openGraph: {
    title: "757 Defense - Criminal & DUI Defense Lawyers",
    description:
      "Expert trial defense for DUI, Reckless Driving, Domestic Violence, Drug Crimes across Hampton Roads.",
    type: "website",
    locale: "en_US",
    siteName: "757 Defense",
  },
  icons: {
    icon:
      {
        url: "/fav-icon.png",
        type: "image/webp",
      },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${cinzel.variable} ${crimsonPro.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#0F0F0F] text-[#F5F2ED] antialiased">
        <ClientLayout>{children}</ClientLayout>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18395291590"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18395291590');
          `}
        </Script>
      </body>
    </html>
  );
}
