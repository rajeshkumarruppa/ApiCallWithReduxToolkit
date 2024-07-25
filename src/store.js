// import {configureStore, createAsyncThunk, createSlice}from '@reduxjs/toolkit'
// const initialData={
//     users:[],
//     status:"",
//     error:false
// }

// export const fetchUsers=createAsyncThunk('user/fetch',async(s)=>{
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json();
//     return data
//    }catch(error){
//     throw(error)
//    }

// })
// const userSlice=createSlice({
//     name:'user',
//     initialState:initialData,
//     reducers:{
        
//         },
//     extraReducers:(builder)=>{
//         builder.addCase(fetch.pending,(state,action)=>{
//             state.status="loading..."

//         })
//         builder.addCase(fetch.fulfilled,(state,action)=>{
//             state.status="success"
//             state.users=action.payload
//         })
//         builder.addCase(fetch.rejected,(state,action)=>{
//             state.status="failed"
//             state.error=action.error.message

//         })
//     },

// })
// const store=configureStore({
//     reducer:{
//         user:userSlice.reducer
//     }
// })
// export default store;


import { createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";
let initial={
  users:[],
  status:null,
  error:false
}
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (s) => {
  try {
    console.log(s)
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
});
const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;

