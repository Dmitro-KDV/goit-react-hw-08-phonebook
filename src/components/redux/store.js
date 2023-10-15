import { configureStore } from "@reduxjs/toolkit";

import {persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {contactsReducer, filtersReducer} from './tasks/slice'
import { authReduser } from "./auth/slice";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   auth: authReduser,
//   filters: filtersReducer,
// })

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['filters','contacts'],
}

const persistedReducer = persistReducer(persistConfig, authReduser)

export const store = configureStore(
  {reducer: 
            // persistedReducer,
            {
            auth: persistedReducer,
            contacts: contactsReducer,
            filters: filtersReducer,
            }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
              serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
  })
})

export const persistor = persistStore(store)