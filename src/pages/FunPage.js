import React, { useMemo, useState } from 'react';
import FunModule from '../components/portfolio/FunModule';
import Lightbox from '../components/portfolio/Lightbox';
import { artFilters, artPieces } from '../data/portfolioContent';

export default function FunPage() {
  const [artFilter, setArtFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredArt = useMemo(() => {
    if (artFilter === 'all') {
      return artPieces;
    }

    return artPieces.filter((piece) => piece.category === artFilter);
  }, [artFilter]);

  return (
    <>
      <main className="portfolio-shell">
        <FunModule
          artFilter={artFilter}
          artFilters={artFilters}
          artPieces={filteredArt}
          onFilterChange={setArtFilter}
          onOpenImage={setLightboxItem}
        />
      </main>
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
