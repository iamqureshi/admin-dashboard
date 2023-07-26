import mainTheme from "@/styles/MainTheme";
import { Box } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import Equity from "./components/Equity";
import OptionFlow from "./components/OptionFlow";

export default function RealTimeDashboard() {
  const ResponsiveReactGridLayout = WidthProvider(Responsive);

  return (
    <Box sx={{ color: "white", minHeight: "93vh" }}>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={{
          lg: [
            {
              w: 8,
              h: 6,
              x: 0,
              y: 0,
              i: "1",
              moved: false,
              static: false,
            },
            {
              w: 4,
              h: 6,
              x: 8,
              y: 0,
              i: "2",
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
            <OptionFlow />
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
            <Equity />
          </Box>
        </Box>
      </ResponsiveReactGridLayout>
    </Box>
  );
}
