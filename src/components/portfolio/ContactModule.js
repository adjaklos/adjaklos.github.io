import React from 'react';
import ModuleShell from './ModuleShell';

export default function ContactModule({ contact, portrait }) {
  return (
    <ModuleShell id="contact" label={contact.eyebrow} title={contact.title} dark>
      <div className="contact-layout">
        <div className="contact-copy">
          <p>{contact.intro}</p>

          <div className="contact-catchphrases">
            {contact.catchphrases.map((phrase) => (
              <p key={phrase}>{phrase}</p>
            ))}
          </div>
        </div>

        <div className="contact-aside">
          <div className="contact-portrait-card">
            <img src={portrait} alt="Samuel Adjaklo portrait" />
          </div>

          <div className="contact-links-grid">
            {contact.links.map((link) => (
              <a
                key={link.label}
                className="contact-link-card"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ModuleShell>
  );
}
