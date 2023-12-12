import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './movies';

export const store = configureStore({
    reducer:{
        movies:MoviesSlice
    }
})