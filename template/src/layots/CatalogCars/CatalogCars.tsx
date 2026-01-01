import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useSelector } from 'react-redux';

import CardCar from '@features/CardCar/CardCar';
import { selectFilteredCars } from '@entities/car/select/selectors';

  const CatalogCars: React.FC = () => {
  const cars = useSelector(selectFilteredCars);

  return (
    <div className="flex">
      <Swiper
        key={cars.length}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        modules={[Navigation]}
        breakpoints={{
          200: {
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
        {cars.map(car => (
          <SwiperSlide key={car.id}>
            <CardCar car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CatalogCars;
