import React from 'react';
import { Link } from 'react-router-dom';
import ContactModule from '../components/portfolio/ContactModule';
import HeroModule from '../components/portfolio/HeroModule';
import ModuleShell from '../components/portfolio/ModuleShell';
import {
  contactPortrait,
  contactDetails,
  identityCards,
  landingSections,
  profileImage,
  resumeUrl,
} from '../data/portfolioContent';

export default function Home() {
  return (
    <main className="portfolio-shell">
      <HeroModule
        identityCards={identityCards}
        profileImage={profileImage}
        resumeUrl={resumeUrl}
      />

      <ModuleShell
        id="start-here"
        label="Start here"
        title="Pick the part of the story you want first."
      >
        <div className="page-card-grid">
          {landingSections.map((card) => (
            <Link key={card.to} className="page-card" to={card.to}>
              <p className="section-tag">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </ModuleShell>

      <ContactModule contact={contactDetails} portrait={contactPortrait} />
    </main>
  );
}
