import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const apiURL = 'https://bootcamp-rent-cars.herokuapp.com/customer/auth/login'

// initialstate default awal
const initialState = {
  isLoading: false,
  error: null,
  isLogin: false,
  user: null
}

export const signIn = createAsyncThunk(
  'user/login',
  async ({ username, password }, thunkApi) => {
    try {
      const res = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const result = await res.json()

      // if failed to fetch, then reject it with result
      if (!result.id) return thunkApi.rejectWithValue(result)
      return result
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, _action) => {
        state.isLoading = true
        state.isLogin = false
        state.error = false
        state.user = null
      }) // loading state
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false
        state.isLogin = false
        state.error = action.payload
        state.user = null
      }) // error state
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLogin = true
        state.error = false
        state.user = action.payload
      }) // success state
  }
})

export default authSlice.reducer
