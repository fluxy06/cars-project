import '@app/App.css';

import React from 'react';
import HeaderMy from 'layots/Header/Header';
import Filters from '@features/Filters/Filters';
import CatalogCars from 'layots/CatalogCars/CatalogCars';
import BigCardsLayot from 'layots/BigCards/BigCardsLayot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <HeaderMy logo="GIN" />

      <main className="mx-auto max-w-[1440px] px-4 py-6">
        <div className="flex gap-8">
          
          {/* Filters (left) */}
          <aside className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-24">
              <Filters isMobile={true} />
            </div>
          </aside>

          {/* Content (right) */}
          <section className="flex-1 min-w-0 flex flex-col gap-10 justify-end">
            <BigCardsLayot />
            <CatalogCars />
          </section>


        </div>
      </main>
    </div>
  );
};

export default App;
