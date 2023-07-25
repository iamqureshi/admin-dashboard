import { Box, CircularProgress } from "@mui/material";

export default function TableLoading({ isZero }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: isZero ? 0 : 350,
      }}
    >
      <CircularProgress
        sx={{
          width: "50px !important",
          height: "50px !important",
          color: "white !important",
        }}
      />
    </Box>
  );
}
