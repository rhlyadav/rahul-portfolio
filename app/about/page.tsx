import siteConfig from '../../siteConfig';

export default function About() {
  return (
    <section aria-labelledby="about-title">
      <h2 id="about-title" className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-slate-700">Hello — I'm a developer who builds accessible, performant web applications. I enjoy TypeScript, testing and good UX.</p>

      <h3 className="mt-6 font-semibold">Contact</h3>
      <p className="text-sm text-slate-600">Find me on GitHub and LinkedIn via the navigation links.</p>
    </section>
  );
}
