import { configureStore } from '@reduxjs/toolkit'
import lightbulbReducer from './lightbulbSlice'

// store
// - created by passing in a reducer
// - used in Provider for whole application (since redux is for global state)
// TIP: use Goto Reference in vim
export const store = configureStore({
  reducer: {
    lightbulb: lightbulbReducer
  }
})

// export RootState type (for typescript type convention)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
