import '@app/App.css';

import React from 'react';
import HeaderMy from "layots/Header/Header";
import Filters from '@features/Filters/Filters';
import CatalogCars from 'layots/CatalogCars/CatalogCars';
import BigCardsLayot from 'layots/BigCards/BigCardsLayot';



const App: React.FC = () => {
  return (
    <>
      <div className='grid grid-cols-3 w-full h-auto'>
        {/* Header */}
        <div className='col-span-3 h-32'>
          <HeaderMy logo='GIN' />
        </div>

        {/* Filters */}
        <div className='col-span-1 row-span-2 p-0 position-fixed'>
          <Filters isMobile={true} />
        </div>

        {/*  BigCards */}
        <div className='flex  gap-8 col-span-2  pb-6'>
             <BigCardsLayot />
        </div>

        {/* Swiper container */}
        <div className='col-span-2 pb-10'>
            <CatalogCars/>
        </div>
      </div>
    </>
  );
};

export default App;