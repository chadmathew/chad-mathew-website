import "./globals.css";
import localFont from "next/font/local";

const drukWide = localFont({
  src: [
    {
      path: "../public/font/fonnts.com-Druk_Wide_Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-druk-wide",
  display: "block",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

const drukXCond = localFont({
  src: [
    {
      path: "../public/font/DrukXCond-Super-Trial.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-druk-xcond",
  display: "block",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

// Metadata export for Next.js App Router
export const metadata = {
  title: "Chad Mathew | Official Website",
  description: "Chad Mathew is a talented personality known as a model, anchor, and rising star. His work and presence reflect creativity and style. This website is designed and developed by Talha Aleem from AleemTalha.com, showcasing professional and modern web development.",
  keywords: "Chad Mathew, Chad Mathew model, Chad Mathew anchor, Chad Mathew official, Chad Mathew star, Chad Mathew portfolio, Talha Aleem developer, AleemTalha.com, React developer, Next.js developer, full stack developer, professional website development, Actor, Model, Presenter, and Content Creator, National Institute of Dramatic Art (NIDA), Australian Film and Television Academy (TAFTA), The Actors Centre (Sydney), Victorian College of the Arts (VCA), Sydney Drama School, Rogues West Acting School (Vancouver, Canada), Royal Academy of Dramatic Art (RADA, London), Qantas, Jetstar, BMW, RSPCA, Cancer Council, Car Australia, DiDi, ING, Chemist Warehouse, Luxaflex, OzCar, Cleverman, Crownies, Behind Mansion Walls, Deadly Women, The Wedge, Satisfaction, The Librarians, OpenShop, TV Shop, Outlook TV, Out TV, Bent TV, JOY 96.9FM",
  authors: [{ name: "Talha Aleem", url: "https://aleemtalha.com" }],
  creator: "Talha Aleem",
  publisher: "Talha Aleem",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Chad Mathew | Official Website",
    description: "Chad Mathew - Model, Anchor, and Rising Star",
    url: "https://www.chadmathew.com",
    siteName: "Chad Mathew",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${drukWide.variable} ${drukXCond.variable}`}>
      <head>
      <link rel="preload" href="/font/fonnts.com-Druk_Wide_Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/font/DrukXCond-Super-Trial.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <meta name="keywords" content="Actor, Model, Presenter, and Content Creator, National Institute of Dramatic Art (NIDA), Australian Film and Television Academy (TAFTA), The Actors Centre (Sydney), Victorian College of the Arts (VCA), Sydney Drama School, Rogues West Acting School (Vancouver, Canada), Royal Academy of Dramatic Art (RADA, London), Qantas, Jetstar, BMW, RSPCA, Cancer Council, Car Australia, DiDi, ING, Chemist Warehouse, Luxaflex, OzCar, Cleverman, Crownies, Behind Mansion Walls, Deadly Women, The Wedge, Satisfaction, The Librarians, OpenShop, TV Shop, Outlook TV, Out TV, Bent TV, JOY 96.9FM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.chadmathew.com",
              "name": "Chad Mathew",
              "creator": {
                "@type": "Person",
                "name": "Talha Aleem",
                "url": "https://aleemtalha.com",
                "jobTitle": "Web Developer",
                "sameAs": [
                  "https://aleemtalha.com",
                  "https://www.linkedin.com/in/talha-aleem-a275a72a6/",
                  "https://github.com/aleemtalha"
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${drukWide.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
