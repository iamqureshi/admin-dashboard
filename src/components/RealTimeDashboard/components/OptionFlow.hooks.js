import axios from "axios";

const { useState, useEffect } = require("react");

const useOptionFlow = () => {
  const [state, setState] = useState({
    optionFlowList: [],
  });

  const getOptionFlowList = async () => {
    await axios.post("/api/options", { data: { offset: 1 } }).then((result) => {
      setState((currentState) => ({
        ...currentState,
        optionFlowList: result.data.documents,
      }));
    });
  };

  useEffect(() => {
    getOptionFlowList();
  }, []);

  return {
    ...state,
  };
};

export default useOptionFlow;
