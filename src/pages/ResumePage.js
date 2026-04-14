import React from 'react';
import ResumeModule from '../components/portfolio/ResumeModule';
import { resumeUrl, transcriptUrl } from '../data/portfolioContent';

export default function ResumePage() {
  return (
    <main className="portfolio-shell">
      <ResumeModule resumeUrl={resumeUrl} transcriptUrl={transcriptUrl} />
    </main>
  );
}
