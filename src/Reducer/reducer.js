import { createSlice } from "@reduxjs/toolkit";
import { getAllAccount } from "../Action/Main.action";

const initialState = {
  MainData: {
    data: [],
    profileData:{},
    isProfileCard:false,
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
  ChatData:{
    chat:[],
    isChatBox:false,
    chatProfile:{}
  }

};

export const DataReducer = createSlice({
  name: "MainData",
  initialState,
  reducers: {
    filterAccountData: (state, action) => {
      state.MainData.profileData = {...state.MainData.data.filter(ele=>ele.id ===  action.payload)[0]}
    },
    showProfileCard:(state,action) => {
      state.MainData.isProfileCard = !state.MainData.isProfileCard
    },
    hideProfileCard:(state,action) => {
      state.MainData.isProfileCard = false
    },
    hideChatBox:(state,action) => {
      state.ChatData.isChatBox = action.payload
    },
    addChatData:(state,action)=> {
      state.ChatData.chat = action.payload
    },
    getChatProfile:(state,action) => {
      state.ChatData.chatProfile = {...state.MainData.data.filter(ele=>ele.id ===  action.payload)[0]}
    }
  },
  extraReducers: {
    [getAllAccount?.fulfilled]: (state, { payload }) => {
      state.MainData.isLoading = false;
      state.MainData.isSucess = true;
      state.MainData.data = payload;
    },
    [getAllAccount?.rejected]: (state, { payload }) => {
      state.MainData.isLoading = false;
      state.MainData.isSucess = false;
      state.MainData.errorMessage = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
filterAccountData,
showProfileCard,
hideProfileCard,
hideChatBox,
addChatData,
getChatProfile
} = DataReducer.actions;

export default DataReducer.reducer;


