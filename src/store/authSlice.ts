import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'authentication',
  initialState: {
    currUser: null
  },
  reducers: {
    login: (state, action) => {

    },
    logout: (state, action) => {

    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice