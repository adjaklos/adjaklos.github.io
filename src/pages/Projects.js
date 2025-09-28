import React from 'react';

export default function Projects() {
  return (
    <main>
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project-card">
          <h3>Hardware Security Tool</h3>
          <p>Custom tool to scan FPGA logic paths and detect vulnerabilities.</p>
          <a href="https://github.com/adjaklo/hardware-security">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Embedded Systems Demo</h3>
          <p>Raspberry Pi + sensor integration demo video.</p>
          <a href="https://youtube.com/">Watch on YouTube</a>
        </div>
      </div>
    </main>
  );
}
