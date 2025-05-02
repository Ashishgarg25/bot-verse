
import Script from 'next/script';

import Footer from './components/Footer';
import Header from './components/Header';
import './styles/globals.css'; // Import global styles

import { Inter } from 'next/font/google'
import { AnalyticsProvider } from './providers';

const inter = Inter({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Bot Verse',
  description: "We explore the latest and most fascinating AI tools, platforms, and breakthroughs. Whether you're an AI enthusiast, curious beginner, or digital explorer, BotVerse breaks it all down in simple, engaging, and insightful content.",
  icons: {
    icon: '/images/favicon.ico',
  },
};

const Layout = ({ children }) => {
  return (
    <>
      {/* Root HTML and Body tags */}
      <html lang="en">
        <head>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6H7103ERNR"
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6H7103ERNR', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </head>
        <body>
          <div className="inter.className">
            <Header />
            <AnalyticsProvider />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
