import { configureStore } from '@reduxjs/toolkit';
// features
import CounterSlice from '../features/Counter/CounterSlice';

const store = configureStore({ reducer: { counter: CounterSlice } });

export default store;
