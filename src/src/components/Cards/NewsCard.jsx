import mainTheme from "@/styles/MainTheme";
import { Card, Typography } from "@mui/material";
import NewsCardComponent from "./NewsCardComponent/NewsCardComponent";

export default function NewsCard() {
  return (
    <Card
      sx={{
        backgroundColor: mainTheme.palette.info.main,
        color: "white",
      }}
    >
      <Typography
        pt={2}
        gutterBottom
        variant="h6"
        component="h5"
        align="center"
      >
        News Card
      </Typography>
      <NewsCardComponent />
      <NewsCardComponent />
      <NewsCardComponent />
      <NewsCardComponent />
      <NewsCardComponent />
    </Card>
  );
}
