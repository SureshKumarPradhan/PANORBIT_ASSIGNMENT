import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterAccountData } from "../../Reducer/reducer";
import TextSticker from "../../ShareModule/TextSticker";
import GoogleMAp from "../../ShareModule/GoogleMAp";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const AccountData = useSelector(
    (state) => state.reducer?.MainData?.profileData
  );
  console.log(AccountData, "data");
  useEffect(() => {
    if (location.state) {
      dispatch(filterAccountData(location.state));
    }
  }, [location.state]);
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <img
                src={AccountData?.profilepicture}
                alert="img"
                style={{
                  height: "150px",
                  width: "150px",
                  borderRadius: "50%",
                }}
              />
              <Typography>{AccountData.name}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextSticker
                leftName={"UserName"}
                rightName={AccountData?.username}
              />
              <TextSticker leftName={"e-Mail"} rightName={AccountData?.email} />
              <TextSticker leftName={"Phone"} rightName={AccountData?.phone} />
              <TextSticker
                leftName={"Website"}
                rightName={AccountData?.website}
              />
            </Box>
            <Divider light sx={{ width: "70%", mt: 2 }} />
            <Typography sx={{ mt: 1, mb: 1, color: "gray" }}>
              Company
            </Typography>
            <Box>
              <TextSticker
                leftName={"Name"}
                rightName={AccountData?.company?.name}
              />
              <TextSticker
                leftName={"CatchPhase"}
                rightName={
                  AccountData?.company?.catchPhrase?.slice(0, 20) + "..."
                }
              />
              <TextSticker
                leftName={"bs"}
                rightName={AccountData?.company?.bs}
              />
            </Box>
          </Box>
        </Grid>
        {/* Right Grid */}
        <Grid item xs={7} sx={{ borderLeft: "1px solid lightgray" }}>
          <Box>
            <Typography
              sx={{ fontSize: "20px", pl: 2, color: "gray", textAlign: "left" }}
            >
              Address :{" "}
            </Typography>
            <Box sx={{ pl: 6, mt: 1 }}>
              <TextSticker
                leftName={"Street"}
                rightName={AccountData?.address?.street}
              />
              <TextSticker
                leftName={"Suite"}
                rightName={AccountData?.address?.suite}
              />
              <TextSticker
                leftName={"City"}
                rightName={AccountData?.address?.city}
              />
              <TextSticker
                leftName={"Zipcode"}
                rightName={AccountData?.address?.zipcode}
              />
            </Box>
            <Box sx={{ width: "100%", height: "100%" }}>
              <GoogleMAp
                lat={AccountData?.address?.geo.lat}
                lng={AccountData?.address?.geo.lng}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
