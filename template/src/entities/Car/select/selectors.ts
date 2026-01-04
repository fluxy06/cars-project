import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@app/store/store';
import { cars } from '@entities/data/data';
import { capacity_car } from '../types';

export const selectFilteredCars = createSelector(
  [(state: RootState) => state.carFilters],
  (filters) =>
    cars.filter(car => {
      if (
        filters.types.length &&
        !filters.types.includes(car.type)
      ) return false;
      
      if (
        filters.capacity.length &&
        !filters.capacity.includes(car.baseInfo.peoples as capacity_car)
      ) return false;

      if (car.pricePerDay > filters.maxPrice) return false;

      return true;
    })
);
