import React, { useState } from "react"
import { enumToArray } from "@entities/Car/types"
import { capacity_car, type_car } from "@entities/Car/types"
import { motion } from "framer-motion"

type FilterProps = {
    onclick?: () => void
    isMobile?: boolean
}

const Filters: React.FC<FilterProps> = ({ onclick, isMobile = false }) => {
    const types = enumToArray(type_car);
    const capacity = enumToArray(capacity_car);

    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full"
        >
            {isMobile && (
                        <motion.button
                            layout
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={() => setOpen(prev => !prev)}
                            className={`
                                relative inline-block py-2 px-4 rounded-3xl 
                                font-semibold text-white 
                                bg-[#3563E9] border-[0.3px] border-white/45 
                                shadow-[0_4px_15px_rgba(53,99,233,0.4)]
                                hover:shadow-[0_8px_25px_rgba(53,99,233,0.6)]
                                active:shadow-[0_2px_10px_rgba(53,99,233,0.4)]
                                transition-shadow duration-300 ease-in-out
                            `}
                            >
                            Фильтры {open ? "▲" : "▼"}
                    </motion.button>
            )}

            <motion.div
                layout
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={open || !isMobile ? "block" : "hidden"}
            >
                <div className="grid grid-rows-3 gap-4 py-2">

                    <div>
                        <p className="text-left text-[clamp(16px,5vw,20px)]">Категории автомобилей</p>
                        <div className="grid gap-3 mt-2">
                            {types.map(t => (
                                <label key={t} className="flex items-center gap-2">
                                    <input type="checkbox" 
                                    className="peer
                                                            appearance-none
                                                            w-[clamp(8px,4vw,24px)]
                                                            h-[clamp(8px,4vw,24px)]
                                                            rounded-xl
                                                            border border-gray-400
                                                            checked:bg-[#3562e9c7]
                                                            checked:border-[#3563E9]"
                                    onClick={onclick} />
                                    <span className="text-[clamp(10px,4vw,16px)]">{t}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-left">Вместимость</p>
                        <div className="grid gap-3 mt-2">
                            {capacity.map(c => (
                                <label key={c} className="flex items-center gap-2">
                                    <input type="checkbox"
                                     className="peer
                                                            appearance-none
                                                            w-[clamp(8px,4vw,24px)]
                                                            h-[clamp(8px,4vw,24px)]
                                                            rounded-xl
                                                            border border-gray-400
                                                            checked:bg-[#3562e9c7]
                                                            checked:border-[#3563E9]" 
                                     onClick={onclick} />
                                    <span className="text-[clamp(10px,4vw,16px)]">{c}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-left gap-1">
                        <input type="range" className="w-[clamp(130px,50vw,250px)] h-3"/>
                        <span className="text-[clamp(10px,4vw,20px)] text-left">Максимальная стоимость</span>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default Filters
