import React from "react";
import { Car } from "@entities/car/car"
import { type_car } from "@entities/car/types";
import Icon from "@shared/Icon/icon";
import UrlIconHeart from "@assets/icons/heart.svg?url"
import CarImg from "@shared/Car/CarImg"
import CarBenzIcon from "@assets/car/icon-cars/benz.svg?url"
import CarMalIcon from "@assets/car/icon-cars/mal.svg?url"
import CarProfileIcon from "@assets/car/icon-cars/profile.svg?url"
import ActionButton from "@shared/ActionButton/ActionButton";

type CardCarProps = {
    car: Car;
    width?: { min: string; preferred: string; max: string };
    height?: { min: string; preferred: string; max: string };
    onClick?: () => void;
}

const CardCar: React.FC<CardCarProps> = ({width, height, car}) => {
    const widthAdaptive = width
    ? `clamp(${width.min}, ${width.preferred}, ${width.max})`
    : `304px`;

  const heightAdaptive = height
    ? `clamp(${height.min}, ${height.preferred}, ${height.max})`
    : '388px';

    return(
        <>
            <div
            className="
            card bg-white rounded-2xl
            grid grid-cols-3 grid-rows-[1fr,3fr,1fr,1fr] autofill: px-5 py-3
            "
            style={{
                width: widthAdaptive,
                height: heightAdaptive
            }}
            >
                    <div className="flex row-start-1 row-end-2 col-span-3 items-center justify-between ">
                        <div className="grid text-left">
                            <p 
                            className="text-[clamp(16px,2vw,24px)] transition-transform duration-100 delay-75"
                            >{type_car[car.type]}</p>
                            <p 
                            className="text-[clamp(12px,1vw,18px)] text-[#90A3BF] transition-transform duration-100 delay-75"
                            >{car.name}</p>
                        </div>
                            <Icon
                            flagAnimation={true}
                            path={UrlIconHeart}
                            width={{min: "16px", preferred: "2vw", max: "24px"}}
                            height={{min: "16px", preferred: "2vw", max: "24px"}}
                            onclick={() => {console.log("like is clicked")}}
                            />
                    </div>
                    <div className="grid row-start-2 row-end-3 col-span-3 justify-center">
                            <CarImg path={car.image} onclick={() => {console.log("car is clicked")}}/>
                    </div>
                    <div className="flex row-start-3 row-end-4 col-span-3 justify-between gap-1">
                            <div className="flex gap-1 items-center">
                                <Icon path={CarBenzIcon}/>
                                <p className="text-[clamp(10px,1vw,14px)]">{car.baseInfo.volume}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Icon path={CarMalIcon}/>
                                <p className="text-[clamp(8px,1vw,14px)]">Manual</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Icon path={CarProfileIcon} />
                                <p className="text-[clamp(8px,1vw,14px)]">{car.baseInfo.peoples}</p>
                            </div>
                    </div>
                    <div className="flex row-start-4 row-end-4 col-span-3 items-center justify-between">
                            <div className="flex items-center">
                                <p className="text-[clamp(12px, 2vw, 16px)] text-black">{car.pricePerDay} $ /</p>
                                <p className="text-[clamp(8px, 1vw, 12px)] text-[#90A3BF]"> день</p>
                            </div>
                            <ActionButton label="Арендовать" isCardButton={true}
                             width={{min: "60px", preferred: "8vw" ,max: "120px"}}
                             height={{min: "30px", preferred: "calc(20vw * 0.36)", max: "36px"}}
                             />
                    </div>
            </div>
        </>
    )
}

export default CardCar;