import { Box } from "@mui/material";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";
import useLayout from "./Layout.hooks";
import RealTimeDashboard from "../RealTimeDashboard/RealTimeDashboard";
import mainTheme from "@/styles/MainTheme";

const Layout = () => {
  const { setTab, tab, open, setOpen } = useLayout();

  let content = null;
  switch (tab) {
    case 1:
      content = <Dashboard />;
      break;
    case 2:
      content = <RealTimeDashboard />;
      break;
    // case 3:
    //   content = "Settings";
    //   break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <Navbar tab={tab} setTab={setTab} open={open} setOpen={setOpen} />
      <Box
        sx={{
          paddingLeft: open ? "277px" : "85px",
          paddingRight: open ? "27px" : "35px",
          paddingTop: "80px",
          height: "100%",
          minWidth: "100vh",
        }}
      >
        {content}
      </Box>
    </React.Fragment>
  );
};

export default Layout;
