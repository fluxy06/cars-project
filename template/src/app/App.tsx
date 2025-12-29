import '@app/App.css';

import React from 'react';
import HeaderMy from "layots/Header/Header";
import Filters from '@features/Filters/Filters';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ← для стрелок
import 'swiper/css';
import 'swiper/css/navigation';
import CarIO from '@assets/car/cars/cr1.svg?url';
import CarIT from '@assets/car/cars/cr2.svg?url';
import CarIH from '@assets/car/cars/cr3.svg?url';
import CarIF from '@assets/car/cars/cr4.svg?url';
import CardCar from '@features/CardCar/CardCar';

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
          <Filters />
        </div>

        {/* Swiper container */}
        <div className='col-span-2'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true} 
            navigation={true}
            modules={[Navigation]} 
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardCar
                path={CarIF}
                width={{ min: "200px", preferred: "23.75vw", max: "304px" }}
                height={{ min: "260px", preferred: "30.3vw", max: "388px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCar
                path={CarIO}
                width={{ min: "200px", preferred: "23.75vw", max: "304px" }}
                height={{ min: "260px", preferred: "30.3vw", max: "388px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCar
                path={CarIT}
                width={{ min: "200px", preferred: "23.75vw", max: "304px" }}
                height={{ min: "260px", preferred: "30.3vw", max: "388px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCar
                path={CarIH}
                width={{ min: "200px", preferred: "23.75vw", max: "304px" }}
                height={{ min: "260px", preferred: "30.3vw", max: "388px" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default App;