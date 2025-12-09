import React from "react";

type IconProps = {
    onclick?: () => void;
    path: string;
    width?: { min: string; preferred: string; max: string };
    height?: { min: string; preferred: string; max: string };
}

const CarImg: React.FC<IconProps> = ({path, width, height, onclick}) => {
        const widthAdaptive = width
        ? `clamp(${width.min}, ${width.preferred}, ${width.max})`
        : `248px`;

    const heightAdaptive = height
        ? `clamp(${height.min}, ${height.preferred}, ${height.max})`
        : '100px';
        return(
            <>
                <img
                className="hover:scale-110 tracking-normal duration-400 cursor-pointer ease-in-out delay-75"
                src={path}
                alt="car@image" 
                style={{
                    width: widthAdaptive,
                    height: heightAdaptive,
                    filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.3))",
                }}
                onClick={onclick}
                />
            </>
        )
}

export default CarImg