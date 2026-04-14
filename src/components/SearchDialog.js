import React, { useEffect, useMemo, useState } from 'react';

export default function SearchDialog({ items, onClose, open }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) {
      setQuery('');
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, open]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery));
  }, [items, query]);

  if (!open) {
    return null;
  }

  return (
    <div className="search-dialog-backdrop" onClick={onClose} role="presentation">
      <div
        aria-label="Site search"
        className="search-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="search-dialog-head">
          <h2>Search the portfolio</h2>
          <button className="search-close" onClick={onClose} type="button">
            Close
          </button>
        </div>

        <input
          autoFocus
          className="search-input"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search pages, experience, coursework, or projects"
          type="search"
          value={query}
        />

        <div className="search-results">
          {filteredItems.map((item) => (
            <a
              key={item.href}
              className="search-result-card"
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
