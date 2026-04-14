import React, { useState } from 'react';
import ExperienceModule from '../components/portfolio/ExperienceModule';
import Lightbox from '../components/portfolio/Lightbox';
import { experienceHighlights } from '../data/portfolioContent';

export default function ExperiencePage() {
  const [lightboxItem, setLightboxItem] = useState(null);

  return (
    <>
      <main className="portfolio-shell">
        <ExperienceModule
          items={experienceHighlights}
          onOpenImage={setLightboxItem}
        />
      </main>
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
