import { Box, CircularProgress } from "@mui/material";

export default function DashboardLoading({ isZero }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "92vh",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: 0,
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
