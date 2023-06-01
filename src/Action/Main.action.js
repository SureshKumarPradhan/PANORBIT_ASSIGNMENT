
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getAllAccountApi } from "../const/constant";


// --------------------------------------------GET LIST OF ALL ACCOUNT--------------------------------

export const getAllAccount = createAsyncThunk('MainData', async (page,{ rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${getAllAccountApi}`);
    return data.users;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})



// async function getAllAccount(payload) {
//   try {
//     let apiEndpoint = "https://panorbit.in/api/users.json";
//     let response = await userService.get(apiEndpoint);
//     // console.log(response,'get')
//     if (response && response.status === 200) {
//       return {
//         status: response.status,
//         message: response.statusText,
//         data: response.data,
//       };
//     } else {
//       return { status: 400, message: "Something Went Wrong", data: null };
//     }
//   } catch (error) {
//     return { status: 400, message: "Something Went Wrong", data: null };
//   }
// }


