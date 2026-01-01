import { configureStore} from '@reduxjs/toolkit';
import carFiltersReducer from '@features/Filters/slice';


export const store = configureStore({
    reducer: {
        carFilters: carFiltersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;