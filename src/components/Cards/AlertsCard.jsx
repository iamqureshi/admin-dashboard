import { Card, LinearProgress, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import mainTheme from "../../styles/MainTheme";
import TableLoading from "../TableLoading/TableLoading";
import AlertComponent from "./AlertCardComponent/AlertComponent";
import useAlertHook from "./AlertHook.hooks";

export default function AlertCard() {
  const {
    totalAlerts,
    containerRef,
    handleScroll,
    alertCardLoading,
    alerts,
    setScrollPosition,
  } = useAlertHook();

  if (alertCardLoading || alerts.length === 0) return <LinearProgress />;

  return (
    <Card
      ref={containerRef}
      sx={{
        backgroundColor: mainTheme.palette.info.main,
        color: "white",
        height: "450px",
        overflowY: "scroll",
      }}
      onScroll={(event) => {
        setScrollPosition(event.target.scrollTop);
        handleScroll();
      }}
    >
      <Typography
        pt={2}
        gutterBottom
        variant="h6"
        component="h5"
        align="center"
      >
        Alert Card
      </Typography>

      <InfiniteScroll
        dataLength={alerts.length}
        next={handleScroll}
        hasMore={alerts.length < totalAlerts}
        loader={<TableLoading isZero={true} />}
        style={{
          overflow: "hidden",
        }}
      >
        {alerts.map((item, index) => (
          <AlertComponent item={item} key={index} />
        ))}
      </InfiniteScroll>
    </Card>
  );
}
