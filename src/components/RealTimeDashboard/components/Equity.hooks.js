import axios from "axios";
import { useSelector } from "react-redux";

const { useState, useEffect } = require("react");

const useEquityHook = () => {
  const objSearchItem = useSelector(
    (state) => state.searchReducer.objSearchItem
  );
  const [state, setState] = useState({
    equityList: [],
  });

  const getEquityList = async () => {
    await axios.post("/api/equities").then((result) => {
      if (objSearchItem !== null) {
        const data = result.data;
        const res = data.filter((item) => {
          if (item.ticker === objSearchItem) {
            return item;
          }
        });
        setState((currentState) => ({
          ...currentState,
          equityList: res,
        }));
      } else {
        setState((currentState) => ({
          ...currentState,
          equityList: result.data,
        }));
      }
    });
  };

  const getFilteredData = () => {
    getEquityList();
  };

  useEffect(() => {
    if (objSearchItem !== null) {
      getFilteredData();
    } else {
      getEquityList();
    }
  }, [objSearchItem]);

  useEffect(() => {
    getEquityList();
  }, []);

  return {
    ...state,
  };
};

export default useEquityHook;
