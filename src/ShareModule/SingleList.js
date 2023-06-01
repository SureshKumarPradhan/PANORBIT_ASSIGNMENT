import React from "react";
import { Box, Typography } from "@mui/material";
// import  image from '.././Image/background.jpg'
import Divider from "@mui/material/Divider";
const SingleList = (props) => {
  const { name, image, id } = props;
  return (
    <>
      <Box sx={{ display: "flex", cursor: "pointer", mt: 1 }}>
        <img
          src={image}
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          alt={"image"}
          loading="lazy"
        />
        <Typography sx={{ ml: 2, mt: 0.4, fontSize: "15px" }}>
          {name}
        </Typography>
      </Box>
      
    </>
  );
};
export default SingleList;
