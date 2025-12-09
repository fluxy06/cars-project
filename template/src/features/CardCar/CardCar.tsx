import React from "react";
import { Car } from "@entities/Car/car"
import Icon from "@shared/Icon/icon";
import UrlIconHeart from "@assets/icons/heart.svg?url"
import CarImg from "@shared/Car/CarImg"
import CarBenzIcon from "@assets/car/icon-cars/benz.svg?url"
import CarMalIcon from "@assets/car/icon-cars/mal.svg?url"
import CarProgileIcon from "@assets/car/icon-cars/progile.svg?url"

type CardCarProps = {
    car?: Car;
    width?: { min: string; preferred: string; max: string };
    height?: { min: string; preferred: string; max: string };
    onClick?: () => void;
    path: string;
}

const CardCar: React.FC<CardCarProps> = ({width, height, path}) => {
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
                            >CR  - V</p>
                            <p 
                            className="text-[clamp(12px,1vw,18px)] text-[#90A3BF] transition-transform duration-100 delay-75"
                            >SUV</p>
                        </div>
                            <Icon
                            path={UrlIconHeart}
                            width={{min: "16px", preferred: "2vw", max: "24px"}}
                            height={{min: "16px", preferred: "2vw", max: "24px"}}
                            onclick={() => {console.log("like is clicked")}}
                            />
                    </div>
                    <div className="grid row-start-2 row-end-3 col-span-3 justify-center">
                            <CarImg path={path} onclick={() => {console.log("car is clicked")}}/>
                    </div>
                    <div className="flex row-start-3 row-end-4 col-span-3 justify-between gap-1">
                            <div className="flex gap-1">
                                <Icon path={CarBenzIcon}/>
                                <p>80L</p>
                            </div>
                            <div className="flex gap-1">
                                <Icon path={CarMalIcon}/>
                                <p>Manual</p>
                            </div>
                            <div className="flex gap-1">
                                <Icon path={CarProgileIcon} />
                                <p>6 человек</p>
                            </div>
                    </div>
                    <div>

                    </div>
            </div>
        </>
    )
}

export default CardCar;