import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardCar from '@features/CardCar/CardCar';
import { cars } from '@entities/data/data'; 

const CatalogCars: React.FC = () => {
  return (
    <div className="flex">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
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
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CardCar
              car={car}
              width={{ min: "200px", preferred: "23.75vw", max: "304px" }}
              height={{ min: "260px", preferred: "30.3vw", max: "388px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CatalogCars;
