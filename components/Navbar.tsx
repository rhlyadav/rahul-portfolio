"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../siteConfig';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const path = usePathname() || '/';
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
        <nav aria-label="Primary" className="flex gap-6 items-center">
          <a href="#main" className="skip-link">Skip to content</a>
          <Link href="/" aria-current={path === '/' ? 'page' : undefined} className="font-semibold text-lg">
            {siteConfig.name}
          </Link>
          <ul className="hidden sm:flex gap-4 items-center ml-6">
            {siteConfig.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={path === n.href ? 'text-blue-600' : 'text-slate-700'}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={siteConfig.social.github} aria-label="GitHub" className="text-slate-600 hover:text-slate-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-300">
            <FaGithub />
          </a>
          <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
