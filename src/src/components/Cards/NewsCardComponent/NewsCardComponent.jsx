import mainTheme from "@/styles/MainTheme";
import { Box, Typography } from "@mui/material";

export default function NewsCardComponent() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#06232d",
          height: "90px",
          padding: 1,
          borderBottom: "#1f2b2e solid 1px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "17px", p: 0, fontWeight: "bold" }}
          color="white"
        >
          NEO $4 COL <span style={{ fontSize: "27px" }}>.</span> Expires on jul
          7, 2023
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "yellowGreen",
              height: "10px",
              width: "10px",
              mr: 1,
            }}
          ></Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold" }}
            variant="body1"
          >
            BULLISH WHALE ALERTS
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            opacity: "0.7",
          }}
        >
          Alerted at 9:30AM on july 8, 2023
        </Typography>
      </Box>
    </>
  );
}
