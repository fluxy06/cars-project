import React from "react";
import CardBigWidget from '@widgets/CardBigWidgets/CardBigWidget';
import BigCarImg from "@assets/car/cars/cr3.svg?url"
import BigCarImgTwo from "@assets/car/cars/cr4.svg?url"


const BigCardsLayot: React.FC = () => {
    return(
        <>
              <CardBigWidget 
              width={{
                min: '280px',
                preferred: '38vw',
                max: '492px'
              }}
              height={{
                min: "210px",
                preferred: "28vw",
                max: "360px"
              }}
              imgCar={BigCarImgTwo} typeCard={true}  h1Text='Лучшая платформа по аренде автомобилей' pText='Легкий процесс бронирования!'/>
              <CardBigWidget imgCar={BigCarImg} typeCard={false} h1Text='Во всех крупных регионах России' pText='Удобно, быстро, надежно' 
              width={{
                min: '280px',
                preferred: '38vw',
                max: '492px'
              }}
              height={{
                min: "210px",
                preferred: "28vw",
                max: "360px"
              }}
              />
        </>
    )
}

export default BigCardsLayot