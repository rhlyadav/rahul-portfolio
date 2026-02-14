import siteConfig, { Project } from '../../siteConfig';
import ProjectCard from '../../components/ProjectCard';

// Server Component: reads from a static config and renders ProjectCard (client) for each
export default function Projects() {
  const projects: Project[] = siteConfig.projects;
  return (
    <section aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-2xl font-semibold">Projects</h2>
      <p className="mt-2 text-slate-600">Selected work — click to view the repository or demo.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          // ProjectCard is a client component
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
