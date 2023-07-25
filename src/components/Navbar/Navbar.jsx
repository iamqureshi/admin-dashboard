import { currentSearchItem } from "@/app/features/searcFunctionality";
import mainTheme from "@/styles/MainTheme";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";

function Navbar({ tab, setTab, open, setOpen }) {
  const searchTickerList = useSelector((s) => s.searchReducer.searchTickerList);
  const dispatch = useDispatch();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: "999999",
          backgroundColor: mainTheme.palette.info.main,
          borderBottom: "#06202a solid 2px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setOpen();
            }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="body1"
            color="initial"
            sx={{ flex: 1 }}
          ></Typography>
          <Box>
            <Autocomplete
              sx={{
                minWidth: "300px",
                border: "grey solid 1px",
                borderRadius: "10px",
                color: "white",
                outline: "none",
              }}
              fullWidth
              options={searchTickerList || []}
              getOptionLabel={(option) => option.ticker}
              onChange={(e, value) => {
                if (value) {
                  if (value.ticker) {
                    dispatch(currentSearchItem(value.ticker));
                  }
                } else {
                  dispatch(currentSearchItem(null));
                }
              }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{ ...params.InputProps }}
                  sx={{
                    color: "white !important",
                    outline: "none !important",
                  }}
                  placeholder="Global Ticker Filter"
                />
              )}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <SideBar open={open} tab={tab} setTab={setTab} />
    </>
  );
}
export default Navbar;
