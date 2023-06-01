import React from 'react';
import { Box,Typography } from '@mui/material';
const ComingSoon = ({name}) => {
    return(
        <>
         <Box className="text_center" sx={{}}>
         <Typography sx={{opacity:'.2',fontSize:'60px',fontWeight:'bold',color:'gray'}}>{name}</Typography>
        </Box>
        </>
    )
}
export default ComingSoon;