import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider
} from "@mui/material";
import "./landing.css";
import { getAllAccount } from "../../Action/Main.action";
import SingleList from "../../ShareModule/SingleList";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const LandingPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const AccountList = useSelector((state) => state.reducer.MainData.data);

  useEffect(() => {
    dispatch(getAllAccount());
  },[]);
const handleClickAccount = (id)=> {
  navigate('/Profile', { state: id })
}
  return (
    <>
      <Box className="body">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            className="card"
            sx={{ borderRadius: "20px", boxShadow: " 4px 4px 4px #888888" }}
          >
            <CardContent sx={{ backgroundColor: "whitesmoke" }}>
              <Typography color="text.secondary">Select An Account</Typography>
            </CardContent>
            <CardContent>
              {/* Single list is a common component */}
              <Box
                className="custom-scroll"
                sx={{ height: "55vh", overflowY: "scroll" }}
              >
                {AccountList.map((ele, index) => (
                  <Box  key={ele.id}>
                  <div onClick={()=>handleClickAccount(ele.id)}>
                 <SingleList
                   
                    id={ele.id}
                    name={ele.name}
                    image={ele.profilepicture}
                  />
                  </div>
                  <Divider sx={{ mt: 1.5 }} light />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
