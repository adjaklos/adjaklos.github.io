import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroModule({ profileImage, resumeUrl, identityCards }) {
  return (
    <>
      <section className="hero-panel" id="top">
        <div className="hero-copy">
          <p className="section-tag">Samuel Adjaklo | Computer Engineering</p>
          <h1>Embedded systems, circuit design, and hardware that has to work in real life.</h1>
          <p className="hero-summary">
            I&apos;m Samuel Adjaklo, a Michigan State computer engineering student focused on
            embedded systems, real-time sensing, and practical hardware-software
            integration. This portfolio brings together the research, coursework,
            circuit projects, and art that shape how I work.
          </p>

          <div className="hero-actions">
            <Link className="primary-action" to="/experience">
              See experience
            </Link>
            <Link className="secondary-action" to="/projects">
              View projects
            </Link>
            <a className="secondary-action" href={resumeUrl} target="_blank" rel="noreferrer">
              Open resume
            </a>
          </div>

          <div className="hero-highlights">
            <span>HATLabs research</span>
            <span>Fraunhofer experience</span>
            <span>Physics learning assistant</span>
            <span>Art and portrait work</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <img src={profileImage} alt="Samuel Adjaklo portrait" />
          </div>

          <div className="signal-card">
            <p className="signal-label">Right now</p>
            <strong>Research, circuits, and teaching all at once</strong>
            <p>
              My current work spans HATLabs research, ECE 203 circuit work, and
              helping Physics 183 students build stronger intuition in lab.
            </p>
          </div>
        </div>
      </section>

      <section className="identity-strip" aria-label="Portfolio highlights">
        {identityCards.map((card) => (
          <article key={card.title} className="identity-card">
            <p className="section-tag">{card.title}</p>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
