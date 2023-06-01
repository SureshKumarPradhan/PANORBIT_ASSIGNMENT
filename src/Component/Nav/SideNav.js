import React, { useState } from "react";
import { Box } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import "./nav.css";
import TopNav from "./TopNav";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { hideProfileCard } from "../../Reducer/reducer";
import { useDispatch } from "react-redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listItemArray = [
    { name: "Profile", divider: true },
    { name: "Post", divider: true },
    { name: "Gallery", divider: true },
    { name: "Todo", divider: false },
  ];
  const [clickName, setClickName] = useState("Profile");
  const handleClick = (item) => {
    setClickName(item);
    navigate(`/${item}`, { state: location.state });
  };

  return (
    <Box sx={{ position: "absolute", display: "flex", mt: 5, ml: 5 }}>
      <Box className="sideNav" onClick={() => dispatch(hideProfileCard())}>
        <ul className="ul_list">
          {listItemArray &&
            listItemArray.map((ele, index) => {
              return (
                <li key={index} style={{ paddingTop: "8px" }}>
                  <>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{
                          color: `${
                            clickName == ele.name ? "#ffff" : "lightgray"
                          }`,
                          cursor: "pointer",
                          textAlign: "left",
                          ml: 3,
                        }}
                        onClick={() => handleClick(ele.name)}
                      >
                        {ele.name}
                      </Typography>
                      {clickName == ele.name && (
                        <ArrowForwardIosIcon
                          sx={{
                            mr: 0,
                            backgroundColor: "",
                            color: "#ffff",
                            mt: -0.5,
                            fontSize: "20px",
                          }}
                        />
                      )}
                    </Box>
                    {ele.divider && (
                      <Divider
                        sx={{ backgroundColor: "gray", width: "10vw", ml: 2 }}
                      />
                    )}
                  </>
                </li>
              );
            })}
        </ul>
      </Box>
      <TopNav title={clickName} />
    </Box>
  );
};
export default SideNav;
