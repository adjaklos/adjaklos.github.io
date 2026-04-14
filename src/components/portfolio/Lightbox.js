import React from 'react';

export default function Lightbox({ item, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div
      className="lightbox"
      aria-modal="true"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        }}
        role="presentation"
      >
        <button className="lightbox-close" onClick={onClose} type="button">
          Close
        </button>
        <img src={item.src} alt={item.alt} />
        <p>{item.title}</p>
      </div>
    </div>
  );
}
