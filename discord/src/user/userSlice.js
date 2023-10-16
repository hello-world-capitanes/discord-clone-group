import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
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
  reducers: {
    setDefaultUser: (state, action) => {
      const defaultUserData = action.payload; 
      state.id = defaultUserData.id;
      state.name = defaultUserData.name;
      state.username = defaultUserData.username;
      state.avatar = defaultUserData.avatar;
      state.email = defaultUserData.email;
      state.phone = defaultUserData.phone;
      state.state = defaultUserData.state;
      state.friends = defaultUserData.friends;
      state.servers = defaultUserData.servers;
  }
  }
});


export const selectUser = (state) => state.user;
export const { setDefaultUser } = userSlice.actions;
export default userSlice.reducer;
