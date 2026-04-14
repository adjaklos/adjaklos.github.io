import React from 'react';
import ModuleShell from './ModuleShell';

export default function ResumeModule({ resumeUrl, transcriptUrl }) {
  return (
    <ModuleShell id="resume" label="Resume" title="Resume, transcript, and the verified version of my background.">
      <div className="resume-layout">
        <div className="resume-copy">
          <p>
            The resume is embedded below for easy reading, and the transcript link is
            here when you want the academic record behind the coursework page.
          </p>

          <div className="resume-actions">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Open resume PDF
            </a>
            <a href={transcriptUrl} target="_blank" rel="noreferrer">
              Open transcript
            </a>
          </div>
        </div>

        <div className="resume-frame">
          <iframe src={resumeUrl} title="Samuel Adjaklo resume" />
        </div>
      </div>
    </ModuleShell>
  );
}
