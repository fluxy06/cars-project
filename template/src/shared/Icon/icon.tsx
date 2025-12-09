import React, {useState} from "react";

type IconProps = {
    onclick?: () => void;
    path: string;
    width?: { min: string; preferred: string; max: string };
    height?: { min: string; preferred: string; max: string };
    isUse?: boolean
}

const Icon: React.FC<IconProps> = ({path, width, height, isUse = false}) => {
        const [selected, setSelected] = useState(isUse)
        const HeandleClick = () => {
                setSelected(prev => !prev)
        }
        const widthAdaptive = width
        ? `clamp(${width.min}, ${width.preferred}, ${width.max})`
        : `24px`;

    const heightAdaptive = height
        ? `clamp(${height.min}, ${height.preferred}, ${height.max})`
        : '24px';
        return(
            <>
                <img
                className="transition-color duration-250 shadow-2xl delay-75
                transition-transform
                "
                src={path}
                alt="icon@" 
                style={{
                    width: widthAdaptive,
                    height: heightAdaptive,
                    filter: selected 
                    ? "invert(25%) sepia(100%) saturate(500%) hue-rotate(340deg) drop-shadow(0 0 1px red)"
                    : "none",
                    cursor: "pointer"
                }}
                onClick={HeandleClick}
                />
            </>
        )
}

export default Icon