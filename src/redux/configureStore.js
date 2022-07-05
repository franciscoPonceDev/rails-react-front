import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './Greetings/greetings.js';

const store = configureStore({ reducer: { greetings: greetingsReducer } });
export default store;