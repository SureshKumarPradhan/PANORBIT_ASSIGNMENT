import React,{useState,useEffect} from "react";
import { Box } from "@mui/material";    
import SideNav from "../Component/Nav/SideNav";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideProfileCard ,hideChatBox} from "../Reducer/reducer";
import ChatBox from "../Component/ChatBox/ChatBox";
import ChatList from "../Component/ChatList/ChatList";
const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const AccountList = useSelector((state) => state.reducer.MainData.data);
    useEffect(()=>{
 if(AccountList.length === 0){
    navigate('/')
 }
    },[])
  const hideBox = () => {
    dispatch(hideProfileCard())
    dispatch(hideChatBox(false))
  }
  return (
    <Box sx={{}}>
      <SideNav />
      <Box sx={{width:'75vw',ml:'265px',mt:12,position:'absolute',minHeight:'74vh',maxHeight:'auto'}} onClick={hideBox}>
       {children}
      </Box>
      <Box sx={{position:'absolute',right:"35px",bottom:'0px',zIndex:'1',mt:5,display:'flex'}}>
        <ChatBox/>
      </Box>
    </Box>

  );
};
export default PrivateRoute;
