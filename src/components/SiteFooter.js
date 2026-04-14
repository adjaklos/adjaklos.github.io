import React from 'react';
import { contactDetails, resumeUrl } from '../data/portfolioContent';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Samuel Adjaklo | Computer Engineering | Michigan State University</p>

      <div className="footer-links">
        {contactDetails.links.map((link) => (
          <a key={link.label} href={link.href} rel="noreferrer" target="_blank">
            {link.label}
          </a>
        ))}
        <a href={resumeUrl} rel="noreferrer" target="_blank">
          Resume
        </a>
      </div>
    </footer>
  );
}
