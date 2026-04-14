import React from 'react';
import ModuleShell from './ModuleShell';

export default function CourseworkModule({ focusAreas, semesters, transcriptUrl }) {
  return (
    <ModuleShell
      id="coursework"
      label="Coursework"
      title="The classes behind my foundation, plus the ECE 203 builds that pushed it into practice."
    >
      <div className="coursework-layout">
        <div className="coursework-intro-card">
          <p>
            These classes are the academic backbone behind the rest of the portfolio.
            The semester list below comes from my transcript, and the ECE 203 case
            studies below it show what that coursework looked like when it turned
            into real hardware on the bench.
          </p>

          <div className="resume-actions">
            <a href={transcriptUrl} target="_blank" rel="noreferrer">
              Open transcript
            </a>
          </div>

          <div className="coursework-focus">
            {focusAreas.map((focusArea) => (
              <span key={focusArea}>{focusArea}</span>
            ))}
          </div>
        </div>

        <div className="coursework-term-grid">
          {semesters.map((semester) => (
            <article key={semester.term} className="coursework-card">
              <div className="coursework-card-head">
                <div>
                  <p className="eyebrow">{semester.term}</p>
                  <h3>{semester.credits}</h3>
                </div>
                <div className="coursework-meta">
                  <span>{semester.gpa}</span>
                  <span>{semester.honor}</span>
                </div>
              </div>

              <ul className="course-list">
                {semester.courses.map((course) => (
                  <li key={course.code}>
                    <strong>{course.code}</strong>
                    <span>{course.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </ModuleShell>
  );
}
