import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type_car, capacity_car } from '@entities/car/types';


type FiltersState = {
    types: type_car[];
    capacity: capacity_car[];
    maxPrice: number;
}


const initialState: FiltersState = {
    types: [],
    capacity: [],
    maxPrice: 10000,
}

const carFiltersSlice = createSlice({
  name: 'carFilters',
  initialState,
  reducers: {
    toggleType(state, action: PayloadAction<type_car>) {
      const t = action.payload;
      state.types = state.types.includes(t)
        ? state.types.filter(x => x !== t)
        : [...state.types, t];
    },
    toggleCapacity(state, action: PayloadAction<capacity_car>) {
      const c = action.payload;
      state.capacity = state.capacity.includes(c)
        ? state.capacity.filter(x => x !== c)
        : [...state.capacity, c];
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.maxPrice = action.payload;
    },
  },
});

export const {
  toggleType,
  toggleCapacity,
  setMaxPrice,
} = carFiltersSlice.actions;

export default carFiltersSlice.reducer;