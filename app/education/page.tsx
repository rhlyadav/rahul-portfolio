import siteConfig, { Education } from '../../siteConfig';

export default function EducationPage() {
  const education: Education[] = siteConfig.education;
  return (
    <section aria-labelledby="schooling-title">
      <h2 id="education-title" className="text-2xl font-semibold">Education</h2>
      <ul className="mt-4 space-y-3">
        {education.map((e) => (
          <li key={e.id} className="border rounded p-3">
            <div className="font-semibold">{e.institution}</div>
            <div className="text-sm text-slate-600">{e.degree} — {e.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
