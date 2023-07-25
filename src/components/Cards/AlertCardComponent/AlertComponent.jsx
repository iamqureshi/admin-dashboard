import utils from "@/Utils/Utils";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

export default function AlertComponent({ item }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "'Alerted at' h:mma 'on' MMMM d, yyyy");
    return formattedDate;
  };

  const getLeftColor = () => {
    if (item.type === "WHALE") {
      return "#1b0080";
    }

    if (item.type === "TURBO") {
      return "#383838";
    }

    if (item.type === "LIGHTNING") {
      return "#96dad8";
    }

    return "#1b0080";
  };

  const getRightColor = () => {
    if (item.type === "WHALE") {
      return "blue";
    }

    if (item.type === "TURBO") {
      return "black";
    }

    if (item.type === "LIGHTNING") {
      return "skyBlue";
    }

    return "blue";
  };

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(90deg, rgba(29,0,255,1) 0%, ${getLeftColor()} 0%, ${getRightColor()} 58%)`,
          height: "90px",
          padding: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "17px", p: 0, fontWeight: "bold" }}
          color="white"
        >
          {`${
            item.contractKey && item.contractKey.symbol
          } ${utils.getDollarPrice(item.contractKey.strikePriceInCents)}`}{" "}
          <span style={{ fontSize: "27px" }}>. </span>
          {`Expires on ${item.contractKey.expirationDate}`}{" "}
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
            {`${item.signal} ${item.type}`} ALERTS
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            opacity: "0.7",
          }}
        >
          {formatDate(item.time)}
        </Typography>
      </Box>
    </>
  );
}
