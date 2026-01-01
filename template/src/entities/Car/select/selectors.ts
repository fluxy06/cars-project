import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@app/store/store';
import { cars } from '@entities/data/data';

export const selectFilteredCars = createSelector(
  [(state: RootState) => state.carFilters],
  (filters) =>
    cars.filter(car => {
      if (
        filters.types.length &&
        !filters.types.includes(car.type)
      ) return false;


      if (car.pricePerDay > filters.maxPrice) return false;

      return true;
    })
);
