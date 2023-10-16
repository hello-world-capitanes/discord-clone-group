import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  try {
    const response = await fetch('../../db.json');

    if(!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    console.log('async data', data.User)
    return data.User
  } catch(error) {
    throw error
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: '',
      name: '',
      username: '',
      avatar: '',
      email: '',
      phone: '',
      state: '',
      friends: [],
      servers: []
    },
    status: 'idle',
    error: null,
  },
  reducers: {
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchUserData.pending, (state) => {
      state.status = 'loding';
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = 'Fulfilled';
      console.log(action.payload)
      state.user = action.payload
    })
    .addCase(fetchUserData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
});


export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;
export default userSlice.reducer;
