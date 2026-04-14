import React from 'react';

export default function ProjectModule({
  project,
  nextProjectId,
  nextProjectLabel,
  onOpenImage,
}) {
  return (
    <article className="project-module" id={project.id}>
      <div className="project-module-banner">
        <p className="module-label">{project.label}</p>
        <h3>{project.bannerTitle}</h3>
      </div>

      <div className="project-module-body">
        <p className="project-intro">{project.intro}</p>

        <div className="project-focus-row">
          {project.focusAreas.map((focusArea) => (
            <span key={focusArea} className="project-focus-pill">
              {focusArea}
            </span>
          ))}
        </div>

        <div className="project-story-grid">
          <div className="project-narrative-card project-overview-card">
            <h4>{project.overviewTitle}</h4>
            <p>{project.overview}</p>
          </div>

          {project.sections.map((section) => (
            <div key={section.title} className="project-story-card">
              <h4>{section.title}</h4>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        {project.gallery?.length ? (
          <div className="project-gallery">
            {project.gallery.map((item) => (
              <button
                key={item.src}
                className="gallery-thumb project-gallery-thumb"
                onClick={() =>
                  onOpenImage({
                    src: item.src,
                    alt: item.alt,
                    title: project.bannerTitle,
                  })
                }
                type="button"
              >
                <img src={item.src} alt={item.alt} />
                <span className="gallery-caption">{item.caption}</span>
              </button>
            ))}
          </div>
        ) : null}

        <p className="project-design-note">{project.takeaway}</p>

        {nextProjectId ? (
          <div className="project-module-actions">
            <a href={`#${nextProjectId}`}>Next project: {nextProjectLabel}</a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
