import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  //прослойка
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
