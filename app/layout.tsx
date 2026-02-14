import '../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import siteConfig from '../siteConfig';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main id="main" className="mx-auto max-w-4xl px-4 py-8">
          {children}
        </main>
        <footer className="mx-auto max-w-4xl px-4 py-8 text-sm text-slate-500">© {new Date().getFullYear()} {siteConfig.name}.</footer>
      </body>
    </html>
  );
}
