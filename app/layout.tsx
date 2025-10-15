import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameVerse - Discover Hidden Indie Gems",
  description: "The ultimate platform for discovering amazing indie games and connecting with talented developers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VZ3XWVSFYK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VZ3XWVSFYK');
            `,
          }}
        />
         {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tq1wa1u5e0");
            `,
          }}
        />

        {/* Contentsquare */}
        <script src="https://t.contentsquare.net/uxa/480645169b6a9.js">
        </script>
       
        {/* Hotjar Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Hotjar Tracking Code for https://gameversea.netlify.app/ -->
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6547989,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
          
        />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen`}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />

        {/* Additional Analytics Scripts Before Body Close */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Additional tracking scripts can be placed here
              console.log('Analytics tracking initialized');
            `,
          }}
        />
      </body>
    </html>
  )
}
