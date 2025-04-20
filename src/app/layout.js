
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/globals.css'; // Import global styles

import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Bot Verse',
  description: "We explore the latest and most fascinating AI tools, platforms, and breakthroughs. Whether you're an AI enthusiast, curious beginner, or digital explorer, BotVerse breaks it all down in simple, engaging, and insightful content.",
};

const Layout = ({ children }) => {
  return (
    <>
      {/* Root HTML and Body tags */}
      <html lang="en">
        <body>
          <div className="inter.className">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
