import React from 'react';
import ModuleShell from './ModuleShell';

export default function AboutModule({ galleryImages, quickFacts, storyParagraphs }) {
  return (
    <ModuleShell
      id="about"
      label="About"
      title="I like the kind of engineering you can test with your hands."
    >
      <div className="about-grid">
        <article className="story-card">
          {storyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <aside className="facts-card">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="fact-row">
              <span>{fact.label}</span>
              <p>{fact.value}</p>
            </div>
          ))}
        </aside>
      </div>

      <div className="about-portrait-grid">
        {galleryImages.map((image) => (
          <div key={image.src} className="about-portrait-card">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}
