import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleList from "../../ShareModule/SingleList";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { hideChatBox,getChatProfile} from "../../Reducer/reducer";
import { useDispatch } from "react-redux";
import ChatList from "../ChatList/ChatList";
const ChatBox = () => {
  const theme = useTheme();
  const disatch = useDispatch();
  const AccountList = useSelector((state) => state.reducer?.MainData?.data);
  const showChatList = useSelector((state) => state.reducer?.ChatData?.isChatBox)
  const handleClickAccount = (id) => {
    disatch(hideChatBox(true));
    disatch(getChatProfile(id))
  };
  return (
    <Box sx={{ }}>
      <Box sx={{ position:'absolute',right:'270px',bottom:'3px' }}>
     { showChatList &&  <ChatList />}
      </Box>
      <Box>
        <Accordion
          sx={{
            width: "18vw",
            "&.Mui-expanded .MuiAccordionSummary-root": {
              minHeight: theme.spacing(2), // Decrease the size of the summary when expanded
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#00559A",
              minHeight: "10px",
              height: "35px",
              color: "#fff",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              mb: 0.5,
            }}
          >
            <Typography sx={{ color: "#fff" }}>Chat Box</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "whitesmoke", mt: -0.5 }}>
            <Box sx={{ height: "40vh", overflowY: "scroll" }}>
              {AccountList.map((ele, index) => (
                <Box key={ele.id}>
                  <Box
                    onClick={() => handleClickAccount(ele.id)}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <SingleList
                      id={ele.id}
                      name={ele.username}
                      image={ele.profilepicture}
                    />
                    <FiberManualRecordIcon
                      sx={{ color: "blue", fontSize: "10px", mr: 2, mt: 2.5 }}
                    />
                  </Box>
                  <Divider sx={{ mt: 1.5 }} light />
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default ChatBox;
