import mainTheme from "@/styles/MainTheme";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DoughnutChart from "./DoughnutChart";

export default function DoughnutCards(props) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "450px",
        backgroundColor: mainTheme.palette.info.main,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "7px 18px",
          paddingBottom: "7px !important",
        }}
      >
        <Box>
          <Typography variant="caption" color={"grey"}>
            {props.label}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600} color={"white"}>
            {props.title}
          </Typography>
        </Box>
        <Box sx={{ width: "50px" }}>
          <DoughnutChart />
        </Box>
      </CardContent>
    </Card>
  );
}
