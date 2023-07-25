import mainTheme from "@/styles/MainTheme";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import AlertCard from "../Cards/AlertsCard";
import DoughnutCards from "../Cards/DoughnutCards";
import NewsCard from "../Cards/NewsCard";
import DarkAndPoolPrints from "../DarkAndPollPrints/DarkAndPoolPrints";
import OptionOrderFlow from "../OptionOrderFlow/OptionOrderFlow";
import TopGainers from "../TopGainers/TopGainers";
export default function Dashboard() {
  const ResponsiveReactGridLayout = WidthProvider(Responsive);

  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{ px: 1 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DoughnutCards label={"Market Sentiment"} title={"Bullish"} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DoughnutCards label={"Put/Call Ratio"} title={"72.44%"} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DoughnutCards label={"Put/Call Volume"} title={"18M/25M"} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DoughnutCards label={"Put/Call Premium"} title={"$6.09B/$8.54B"} />
        </Grid>
      </Grid>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={{
          lg: [
            {
              w: 6,
              h: 3,
              x: 0,
              y: 0,
              i: "1",
              moved: false,
              static: false,
            },
            {
              w: 6,
              h: 3,
              x: 6,
              y: 0,
              i: "2",
              moved: false,
              static: false,
            },
            {
              w: 3,
              h: 3,
              x: 0,
              y: 3,
              i: "3",
              moved: false,
              static: false,
            },
            {
              w: 3,
              h: 3,
              x: 3,
              y: 3,
              i: "4",
              moved: false,
              static: false,
            },
            {
              w: 6,
              h: 3,
              x: 6,
              y: 3,
              i: "5",
              moved: false,
              static: false,
            },
          ],
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        style={{
          color: "white",
        }}
      >
        <Box
          key="1"
          sx={{
            backgroundColor: mainTheme.palette.info.main,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "scroll  !important",
              px: 2,
            }}
          >
            <OptionOrderFlow />
          </Box>
        </Box>

        <Box
          key="2"
          sx={{
            backgroundColor: mainTheme.palette.info.main,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "scroll  !important",
              px: 2,
            }}
          >
            <TopGainers />
          </Box>
        </Box>

        <Box
          key="3"
          sx={{
            backgroundColor: mainTheme.palette.info.main,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "hidden !important",
            }}
          >
            <AlertCard />
          </Box>
        </Box>
        <Box
          key="4"
          sx={{
            backgroundColor: mainTheme.palette.info.main,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "hidden !important",
            }}
          >
            <NewsCard />
          </Box>
        </Box>
        <Box
          key="5"
          sx={{
            backgroundColor: mainTheme.palette.info.main,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "scroll !important",
              px: 2,
            }}
          >
            <DarkAndPoolPrints />
          </Box>
        </Box>
      </ResponsiveReactGridLayout>
    </React.Fragment>
  );
}
