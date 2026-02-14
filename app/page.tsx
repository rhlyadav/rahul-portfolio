import siteConfig from '../siteConfig';
import Link from 'next/link';

export default function Home() {
  return (
    <section aria-labelledby="home-title">
      <h1 id="home-title" className="text-3xl font-bold">{siteConfig.name}</h1>
      <p className="mt-3 text-slate-700">{siteConfig.description}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/projects" className="p-4 border rounded hover:bg-slate-50">View Projects</Link>
        <Link href="/about" className="p-4 border rounded hover:bg-slate-50">About Me</Link>
      </div>
    </section>
  );
}
