import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatData,hideChatBox } from "../../Reducer/reducer";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CloseIcon from '@mui/icons-material/Close';
import "./chat.css";

let AllChatData = [
  { id: 1, text: "Hello!", sender: "user" },
  { id: 2, text: "Hi there!", sender: "bot" },
  { id: 3, text: "Hello!", sender: "user" },
  { id: 4, text: "Hi there!", sender: "bot" },
  { id: 5, text: "Hello!", sender: "user" },
  { id: 6, text: "Hi there!", sender: "bot" },
  { id: 7, text: "Hello!", sender: "user" },
  { id: 8, text: "Hi there!", sender: "bot" },
];

const ChatList = () => {
  const dispatch = useDispatch();
  const ChatData = useSelector((state) => state?.reducer?.ChatData?.chat);
  const userProfile = useSelector(
    (state) => state.reducer?.ChatData?.chatProfile
  );
  useEffect(() => {
    dispatch(addChatData(AllChatData));
  }, []);
  const closeChatBox = () => {
 dispatch(hideChatBox(false))
  }
  return (
    <Box>
      <div className="chat-container">
        <div className="chat-profile">
        <Box sx={{display:'flex'}}>
          <Avatar
            alt="R"
            src={userProfile?.profilepicture}
            sx={{ width: "25px", height: "25px", mt: 0.7 }}
          />
          <Typography sx={{ mt: 0.7, ml: 1,fontSize:'15px',color:'#ffff' }}>{userProfile?.name}</Typography>
        </Box>
          <CloseIcon sx={{fontSize:'20px',color:'#ffff',mt:.8,mr:1,cursor:'pointer'}} onClick={closeChatBox}/>
        </div>
        <div className="chat-messages">
          {ChatData.map((message) => (
            <>
              <div
                key={message.id}
                className={`chat-message ${
                  message.sender === "user" ? "user" : "bot"
                }`}
              >
                {message.text}
              </div>
              <br />
            </>
          ))}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message" />
          <button className="send-button">Send</button>
        </div>
      </div>
    </Box>
  );
};
export default ChatList;
