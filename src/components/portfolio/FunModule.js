import React from 'react';
import ModuleShell from './ModuleShell';

export default function FunModule({
  artFilter,
  artFilters,
  artPieces,
  onFilterChange,
  onOpenImage,
}) {
  return (
    <ModuleShell
      id="fun"
      label="Art"
      title="Drawing and painting belong in the story too."
    >
      <div className="fun-layout">
        <div className="fun-copy">
          <p>
            The engineering work shows how I solve technical problems. The art shows
            how I observe, compose, and stay patient with detail. I keep both here
            because they really do influence each other.
          </p>
          <p>
            Most of this section is painting, pencil work, and mixed-media studies.
            It is the part of my portfolio that reminds people I am not only
            interested in systems. I also care about proportion, texture, and the
            time it takes to refine something well.
          </p>

          <div className="filter-row" role="tablist" aria-label="Art categories">
            {artFilters.map((filter) => (
              <button
                key={filter.id}
                className={artFilter === filter.id ? 'filter-pill active' : 'filter-pill'}
                onClick={() => onFilterChange(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="art-grid">
          {artPieces.map((piece) => (
            <button
              key={piece.src}
              className="art-tile"
              onClick={() =>
                onOpenImage({
                  src: piece.src,
                  alt: piece.alt,
                  title: piece.title,
                })
              }
              type="button"
            >
              <img src={piece.src} alt={piece.alt} />
              <span>{piece.title}</span>
            </button>
          ))}
        </div>
      </div>
    </ModuleShell>
  );
}
