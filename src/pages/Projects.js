import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      {/* ── PAGE HEADER ──────────────────────────────── */}
      <section className="projects-hero container">
        <div className="fade-in-up">
          <h1 className="projects-hero__title gradient-text">Projects</h1>
          <p className="projects-hero__subtitle">
            A collection of things I've built. Each project is a story of a problemsolved and a lesson learned.
          </p>
        </div>

        {/* Stats bar */}
        <div className="projects-stats fade-in-up delay-2">
          <div className="stat">
            <span className="stat__num">{projects.length}</span>
            <span className="stat__label">Projects made</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat__num">
              {/* unique tags count */}
              {[...new Set(projects.flatMap((p) => p.tags))].length}
            </span>
            <span className="stat__label">Technologies used </span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat__num">∞</span>
            <span className="stat__label"> cups of chai consumed</span>
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ─────────────────────────────── */}
      <section className="projects-grid container">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="projects-cta container fade-in-up">
        <div className="cta-banner">
          <h2 className="cta-banner__title">Want to collaborate?</h2>
          <p className="cta-banner__desc">
            I'm always open to interesting projects, research opportunities,
            and open-source contributions.
          </p>
          <a
            href="https://github.com/P-Rishith-Reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            View GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
