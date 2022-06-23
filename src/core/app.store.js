import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'

import landingReducer from '../features/onboarding/landing/landing.redux'

const rootReducer = combineReducers({
  landing: landingReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// creates the store
export default () => {
	const persistedReducer = persistReducer(persistConfig, rootReducer)

	const store = configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	})

	let persistor = persistStore(store)

	return { store, persistor }
}
