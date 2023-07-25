import axios from "axios";
import { useEffect, useRef, useState } from "react";

const useAlertHook = () => {
  const containerRef = useRef(null);
  const [state, setState] = useState({
    alertOffset: -1,
    totalAlerts: 0,
    alertCardLoading: false,
  });

  const [alerts, setAlerts] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const getAlertsData = async () => {
    try {
      setState((currentState) => ({
        ...currentState,
        alertCardLoading: true,
      }));
      await axios
        .post("/api/alerts", { data: { offset: state.alertOffset + 1 } })
        .then((result) => {
          setState((currentState) => ({
            ...currentState,
            totalAlerts: result.data.totalCount,
          }));
          setAlerts((prevState) => [...prevState, ...result.data.documents]);
        });
    } catch (ex) {
      console.log(ex);
    } finally {
      setState((currentState) => ({
        ...currentState,
        alertCardLoading: false,
      }));
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      alerts.length != 0
    ) {
      loadMoreAlerts();
    }
  };

  const setAlertOffset = (offsetValue) => {
    setState((currentState) => ({
      ...currentState,
      alertOffset: offsetValue,
    }));
  };

  const loadMoreAlerts = () => {
    getAlertsData();
    // setAlerts((prevAlerts) => [...prevAlerts, ...alerts]);
  };

  useEffect(() => {
    if (alerts && alerts.length === 0) {
      getAlertsData();
    }
  }, []);

  useEffect(() => {
    if (scrollPosition !== 0) {
      containerRef.current.scrollTop = scrollPosition;
    }
  }, [alerts]);

  return {
    ...state,
    setAlertOffset,
    getAlertsData,
    containerRef,
    loadMoreAlerts,
    handleScroll,
    alerts,
    scrollPosition,
    setScrollPosition,
  };
};

export default useAlertHook;
