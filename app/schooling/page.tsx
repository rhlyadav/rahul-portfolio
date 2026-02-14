import siteConfig, { Schooling } from '../../siteConfig';

export default function Schooling() {
  const schooling: Schooling[] = siteConfig.schooling;
  return (
    <section aria-labelledby="schooling-title">
      <h2 id="schooling-title" className="text-2xl font-semibold">Education</h2>
      <ul className="mt-4 space-y-3">
        {schooling.map((s) => (
          <li key={s.id} className="border rounded p-3">
            <div className="font-semibold">{s.institution}</div>
            <div className="text-sm text-slate-600">{s.degree} — {s.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
