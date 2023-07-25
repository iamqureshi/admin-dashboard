import { useState } from "react";

const useLayout = () => {
  const [state, setState] = useState({
    tab: 1,
    open: true,
  });

  const setTab = (tabName) => {
    setState((currentState) => ({
      ...currentState,
      tab: tabName,
    }));
  };

  const setOpen = () => {
    setState((currentState) => ({
      ...currentState,
      open: !state.open,
    }));
  };

  return {
    ...state,
    setTab,
    setOpen,
  };
};
export default useLayout;
