import React from 'react';
import ModuleShell from './ModuleShell';

export default function ExperienceModule({ items, onOpenImage }) {
  return (
    <ModuleShell
      id="experience"
      label="Experience"
      title="Research, industry, and teaching all shape the way I build."
    >
      <div className="experience-grid">
        {items.map((item) => (
          <article
            key={item.title}
            className={item.image ? 'experience-card experience-card-image' : 'experience-card'}
            id={item.id}
          >
            <div className="experience-copy">
              <p className="eyebrow">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="experience-organization">{item.organization}</p>
              <p>{item.description}</p>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="experience-focus">
                {item.focus.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </div>

            {item.image ? (
              <button
                className="image-card"
                onClick={() =>
                  onOpenImage({
                    src: item.image,
                    alt: item.alt,
                    title: item.title,
                  })
                }
                type="button"
              >
                <img src={item.image} alt={item.alt} />
              </button>
            ) : (
              <div className="experience-side-note">
                <p>{item.sideNote}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </ModuleShell>
  );
}
