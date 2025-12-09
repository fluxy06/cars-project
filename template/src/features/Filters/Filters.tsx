import React from "react"
import { enumToArray } from "@entities/Car/types"
import { capacity_car, type_car } from "@entities/Car/types"

type FilterProps = {
    onclick?: () => void
}

const Filters: React.FC<FilterProps> = ({onclick}) => {
    const types = enumToArray(type_car);
    const capacity = enumToArray(capacity_car);

    return(
        <>
            <div className="grid grid-rows-3 gap-10">
                {/* Категории автомобилей */}
                   <div>
                        <p className="text-left">Категории автомобилей</p>
                        <div className="grid gap-3 mt-2">
                            {types.map(t => (
                                <label key={t} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4"
                                        onClick={onclick}
                                    />
                                    <span>{t}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Вместимость */}
                    <div>
                        <p className="text-left">Вместимость</p>
                        <div className="grid gap-3 mt-2">
                            {capacity.map(c => (
                                <label key={c} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4"
                                        onClick={onclick}
                                    />
                                    <span>{c}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Фильтр по стоимости */}
                    <div className="grid row-start-3 row-end-3">
                            <input type="range" className="" />
                            <span>Максимальная стоимость</span>
                    </div>
            </div>
        </>
    )
}

export default Filters