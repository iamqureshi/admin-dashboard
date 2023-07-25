import { storeSearchTicker } from "@/app/features/searcFunctionality";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useOptionOrderFlow = () => {
  const objSearchItem = useSelector((s) => s.searchReducer.objSearchItem);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    options: [],
    optionTableOffset: 0,
    totalCount: 0,
    optionTableLoading: true,
  });

  const setOptionTableOffset = (offsetValue) => {
    setState((currentState) => ({
      ...currentState,
      optionTableOffset: offsetValue,
    }));
  };

  const getOptionsDataFromDB = async () => {
    try {
      setState((currentState) => ({
        ...currentState,
        optionTableLoading: true,
      }));
      await axios
        .post("/api/options", { data: { offset: state.optionTableOffset } })
        .then((result) => {
          dispatch(storeSearchTicker(result.data.documents));

          if (objSearchItem !== null) {
            const data = result.data.documents;
            const res = data.filter((item) => {
              if (item.ticker === objSearchItem) {
                return item;
              }
            });
            setState((currentState) => ({
              ...currentState,
              options: res,
              totalCount: res.length,
            }));
          } else {
            setState((currentState) => ({
              ...currentState,
              options: result.data.documents,
              totalCount: result.data.totalCount,
            }));
          }
        });
    } catch (ex) {
      console.log(ex);
    } finally {
      setState((currentState) => ({
        ...currentState,
        optionTableLoading: false,
      }));
    }
  };

  const getFilteredData = () => {
    getOptionsDataFromDB();
  };

  useEffect(() => {
    if (objSearchItem !== null) {
      getFilteredData();
    } else {
      getOptionsDataFromDB();
    }
  }, [objSearchItem]);

  useEffect(() => {
    if (state.optionTableOffset !== 0) {
      getOptionsDataFromDB();
    }
  }, [state.optionTableOffset]);

  return {
    ...state,
    setOptionTableOffset,
    getOptionsDataFromDB,
    getFilteredData,
  };
};

export default useOptionOrderFlow;
