import { Kanit } from 'next/font/google'
import "./globals.css";

const kanitfont = Kanit({
  weight: '400'
});

export const metadata = {
  title: "NextJS Tutorial",
  description: "NextJS Basic tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kanitfont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">        
        {children}
      </body>
    </html>
  );
}
