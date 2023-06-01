import React from "react";
import { Box ,Typography} from "@mui/material";
const TextSticker = ({leftName,rightName}) => {
    return(
        <Box sx={{display:'flex',justifyContent:'left'}}>
        <Typography sx={{fontSize:'15px',color:'gray'}}>{leftName}</Typography>
        <Typography sx={{ml:2,mr:2,fontSize:'15px'}}>:</Typography>
        <Typography sx={{fontSize:'15px',fontWeight:'500'}}>{rightName}</Typography>
        </Box>
    )
}
export default TextSticker