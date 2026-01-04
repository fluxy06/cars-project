import CarImg from "@shared/Car/CarImg";
import React from "react";

type CardBigWidgetProps = {
    imgCar: string;
    h1Text: string;
    pText: string;
    width?: { min: string; preferred: string; max: string };
    height?: { min: string; preferred: string; max: string };
    onclick?: () => void;
    typeCard?: boolean
}

const CardBigWidget: React.FC<CardBigWidgetProps> = ({imgCar, h1Text, pText, width, height, onclick, typeCard = false}) => {
    const widthAdaptive = width
    ? `clamp(${width.min}, ${width.preferred}, ${width.max})`
    : `492px`;

  const heightAdaptive = height
    ? `clamp(${height.min}, ${height.preferred}, ${height.max})`
    : '360px';

    return(
        <>
            <div 
            className="grid justify-items-center rounded-2xl px-5 py-2 shadow-2xl"
            style={{
                    width: widthAdaptive,
                    height: heightAdaptive,
                    backgroundImage: typeCard
                    ? "url('./src/assets/cards/bg-big-crd.svg')"
                    : "url('./src/assets/cards/bg-big-crd2.svg')"
            }}
            >   
                <div className="px-5 py-2">
                    <h1 className="
                    text-[clamp(16px,2.5vw,36px)] text-white wrap-normal text-left m-0
                    "
                    >{h1Text}</h1>
                    <h1 className="text-[clamp(11px,2.5vw,16px)] text-white text-left m-0 py-0"
                    style={{
                        textWrap: "balance"
                    }}
                    >{pText}</h1>
                </div>
                <CarImg path={imgCar} width={{min: "180px", preferred: "45vw", max: "380px"}} onclick={onclick}/>
            </div>
        </>
    )
}

export default CardBigWidget