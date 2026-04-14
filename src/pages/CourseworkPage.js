import React, { useState } from 'react';
import Lightbox from '../components/portfolio/Lightbox';
import CourseProjectsModule from '../components/portfolio/CourseProjectsModule';
import CourseworkModule from '../components/portfolio/CourseworkModule';
import {
  courseworkByTerm,
  courseworkFocus,
  courseworkProjects,
  transcriptUrl,
} from '../data/portfolioContent';

export default function CourseworkPage() {
  const [lightboxItem, setLightboxItem] = useState(null);

  return (
    <>
      <main className="portfolio-shell">
        <CourseworkModule
          focusAreas={courseworkFocus}
          semesters={courseworkByTerm}
          transcriptUrl={transcriptUrl}
        />
        <CourseProjectsModule
          onOpenImage={setLightboxItem}
          projects={courseworkProjects}
        />
      </main>
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
