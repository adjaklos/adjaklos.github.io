import React from 'react';
import AboutModule from '../components/portfolio/AboutModule';
import { aboutGallery, aboutStory, quickFacts } from '../data/portfolioContent';

export default function AboutPage() {
  return (
    <main className="portfolio-shell">
      <AboutModule
        galleryImages={aboutGallery}
        quickFacts={quickFacts}
        storyParagraphs={aboutStory}
      />
    </main>
  );
}
