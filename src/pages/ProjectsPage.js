import React, { useState } from 'react';
import Lightbox from '../components/portfolio/Lightbox';
import ProjectsModule from '../components/portfolio/ProjectsModule';
import { projectModules } from '../data/portfolioContent';

export default function ProjectsPage() {
  const [lightboxItem, setLightboxItem] = useState(null);

  return (
    <>
      <main className="portfolio-shell">
        <ProjectsModule onOpenImage={setLightboxItem} projects={projectModules} />
      </main>
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
