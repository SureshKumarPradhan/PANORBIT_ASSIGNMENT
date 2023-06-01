import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import image from "../../Image/background.jpg";
import SingleList from "../../ShareModule/SingleList";
import { useSelector,useDispatch } from "react-redux";
import ProfileCard from "../ProfileCard/ProfileCard";
import { showProfileCard } from "../../Reducer/reducer";
const TopNav = ({ title }) => {
  const dispatch = useDispatch()
    const AccountData = useSelector(
        state => state.reducer?.MainData?.profileData
      );
      const showProfileCardBox = useSelector(
        state => state.reducer?.MainData?.isProfileCard
      );
      const handleShowProfileCard = () => {
        dispatch(showProfileCard())
      }
  return (
    <Box>
      <Box sx={{ width: "75vw", ml: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ mt: 1.4 }}>{title}</Typography>
          <Box sx={{ mb: 0.5 }} onClick={handleShowProfileCard}>
            <SingleList name={AccountData?.name} image={AccountData?.profilepicture} />
          </Box>
        </Box>
        <Divider light sx={{ mt: 1 }} />
      </Box>
    {showProfileCardBox && <ProfileCard/>}
    </Box>
  );
};
export default TopNav;
