"use client";
import React, { useState } from 'react';
import type { Project } from '../siteConfig';

export default function ProjectCard({ project }: { project: Project }) {
  const [liked, setLiked] = useState(false);
  return (
    <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow fade-up" aria-labelledby={`proj-${project.id}`}>
      <h3 id={`proj-${project.id}`} className="font-semibold text-lg">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 mt-1">{project.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <ul className="flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <li key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</li>
          ))}
        </ul>
        <button aria-pressed={liked} onClick={() => setLiked(!liked)} className="text-sm px-3 py-1 border rounded hover:bg-slate-50">
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </article>
  );
}
