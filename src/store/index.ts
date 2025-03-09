import { configureStore } from '@reduxjs/toolkit'

import userSlice from './authSlice'

const rootReducer = {
  authentication: userSlice.reducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store