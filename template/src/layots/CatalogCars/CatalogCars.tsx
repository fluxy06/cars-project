import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useContainerWidth } from '@features/Hooks/Contain';

import { useSelector } from 'react-redux';

import CardCar from '@features/CardCar/CardCar';
import { selectFilteredCars } from '@entities/car/select/selectors';

 const CatalogCars: React.FC = () => {
  const cars = useSelector(selectFilteredCars);
  const { ref, width } = useContainerWidth();

  const slidesPerView =
    width < 640 ? 1 :
    width < 1024 ? 2 :
    3;

  return (
    <div ref={ref} className="w-full min-w-0">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        slidesPerView={slidesPerView}
        centeredSlides={slidesPerView === 1}
      >
        {cars.map(car => (
          <SwiperSlide key={car.id}>
            <CardCar car={car} />
          </SwiperSlide>
        ))}

        {/* Кастомные стрелки */}
        <div className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 z-10 text-2xl cursor-pointer">
          &#10094;
        </div>
        <div className="swiper-button-next-custom absolute right-16 top-1/2 -translate-y-1/2 z-10 text-2xl cursor-pointer">
          &#10095;
        </div>
      </Swiper>
    </div>
  );
};

export default CatalogCars