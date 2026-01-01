import React, { useState } from "react";
import { enumToArray, type_car, capacity_car } from "@entities/car/types";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store/store";
import { toggleType, toggleCapacity, setMaxPrice } from "@features/Filters/slice";

type FilterProps = {
  onclick?: () => void;
  isMobile?: boolean;
};

const Filters: React.FC<FilterProps> = ({ isMobile = false }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.carFilters);

  const types = enumToArray(type_car);       // ["Спорт", "Седан", ...]
  const capacities = enumToArray(capacity_car); // ["2-ух местная", ...]

  const [open, setOpen] = useState(true);

  return (
    <motion.div layout transition={{ duration: 0.7, ease: "easeInOut" }} className="w-full">
      {isMobile && (
        <motion.button
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setOpen(prev => !prev)}
          className="relative inline-block py-2 px-4 rounded-3xl font-semibold text-white bg-[#3563E9] border-[0.3px] border-white/45 shadow-[0_4px_15px_rgba(53,99,233,0.4)] hover:shadow-[0_8px_25px_rgba(53,99,233,0.6)] active:shadow-[0_2px_10px_rgba(53,99,233,0.4)] transition-shadow duration-300 ease-in-out"
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
          {/* Типы */}
          <div>
            <p className="text-left text-[clamp(16px,5vw,20px)]">Категории автомобилей</p>
            <div className="grid gap-3 mt-2">
              {types.map((t) => (
                <label key={t} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.types.includes(t as type_car)}
                    onChange={() => dispatch(toggleType(t as type_car))}
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
              {capacities.map((c) => (
                <label key={c} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.capacity.includes(c as capacity_car)}
                    onChange={() => dispatch(toggleCapacity(c as capacity_car))}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Цена */}
          <div className="flex flex-col items-start gap-1">
            <input
              className="w-[clamp(120px,40vw,230px)]"
              type="range"
              min={1800}
              max={4000}
              step={300}
              value={filters.maxPrice}
              onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
            />
            <span className="text-[clamp(10px,4vw,20px)] text-left">
              Максимальная стоимость: {filters.maxPrice}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Filters;
