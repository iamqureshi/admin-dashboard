import mainTheme from "@/styles/MainTheme";
import { Dashboard, GridView } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function SideBar({ open, tab, setTab }) {
  const list = () => (
    <Box
      sx={{ width: open ? 250 : 55, paddingTop: "74px", position: "relative" }}
    >
      <List>
        {["Dashboard", "Realtime Dashboard"].map((text, index) => (
          <ListItemButton
            selected={index + 1 === tab}
            onClick={() => setTab(index + 1)}
            key={index}
            sx={{
              borderRight: !open
                ? index + 1 === tab && "skyBlue solid 2px"
                : "none",
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? (
                <Dashboard
                  sx={{
                    color: "skyBlue",
                  }}
                />
              ) : (
                <GridView
                  sx={{
                    color: "skyBlue",
                  }}
                />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Drawer
        anchor={"left"}
        open={true}
        variant="persistent"
        sx={{
          "&>div": {
            backgroundColor: mainTheme.palette.info.main,
            color: "white",
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
}
