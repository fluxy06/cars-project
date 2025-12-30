import '@app/App.css';

import React from 'react';
import HeaderMy from "layots/Header/Header";
import Filters from '@features/Filters/Filters';
import CatalogCars from 'layots/CatalogCars/CatalogCars';


const App: React.FC = () => {
  return (
    <>
      <div className='grid grid-cols-3 w-full h-auto'>
        {/* Header */}
        <div className='col-span-3 h-40'>
          <HeaderMy logo='Nikita' />
        </div>

        {/* Filters */}
        <div className='col-span-1 row-span-2 p-0'>
          <Filters isMobile={true} />
        </div>

        {/* Swiper container */}
        <div className='col-span-2'>
            <CatalogCars />
        </div>
      </div>
    </>
  );
};

export default App;