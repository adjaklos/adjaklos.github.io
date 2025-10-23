import React from 'react';

export default function Documents() {
  return (
    <main>
      <h2>Documents</h2>
      <p>You can view or download my official transcript below:</p>

<a
  href={`${process.env.PUBLIC_URL}/assets/OfficialTranscript.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    padding: '0.75em 1.25em',
    background: '#1E90FF',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    marginTop: '1em',
  }}
>
  📄 View Official Transcript
</a>
    </main>
  );
}
