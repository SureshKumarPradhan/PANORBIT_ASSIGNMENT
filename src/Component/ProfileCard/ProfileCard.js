import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import image from "../../Image/background.jpg";
import SingleList from "../../ShareModule/SingleList";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { showProfileCard, hideProfileCard } from "../../Reducer/reducer";
const ProfileCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const AccountList = useSelector((state) => state.reducer.MainData.data);
  const AccountData = useSelector(
    (state) => state.reducer?.MainData?.profileData
  );
  const handleClickAccount = (id) => {
    navigate("/Profile", { state: id });
    dispatch(hideProfileCard());
  };
  const handelOut = () => {
    navigate("/");
    dispatch(hideProfileCard());
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Card
        sx={{
          minWidth: 270,
          backgroundColor: "white",
          position: "absolute",
          right: "10px",
          mt: 1,
          zIndex: "1",
          borderRadius: "10px",
          boxShadow: "0px 0px 30px gray",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={AccountData?.profilepicture}
              alt="img"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <Typography sx={{ fontSize: "15px", color: "gray", mt: 1 }}>
              {AccountData?.name}
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "gray" }}>
              {AccountData?.email}
            </Typography>
          </Box>
          <Box sx={{ height: "20vh", overflowY: "scroll", mt: 1 }}>
            {AccountList.map((ele, index) => (
              <Box key={ele.id}>
                <div onClick={() => handleClickAccount(ele.id)}>
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
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handelOut}
          >
            Sign Out
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default ProfileCard;
