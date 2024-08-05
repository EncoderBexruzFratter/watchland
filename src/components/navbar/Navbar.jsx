import { Stack, Box, IconButton } from "@mui/material";
import { colors } from "../../constants/colors"
import { Link } from "react-router-dom";
import { SearchBar } from "../index";

export default function Navbar() {
  
  return (
    <Stack height={"10vh"}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} p={3} sx={{ width: "100%" , position: "fixed", left:0 , top: 0, zIndex: 999, backgroundColor: colors.body, maxWidth:"1600px", margin:"auto" }}>
      <Link to={'/'}>
        <IconButton sx={{ fontSize: "22px", borderRadius: 0 , width: "100%", fontWeight: "700", color:`${colors.primary}`, fontFamily: "monospace" }}>
          WatchLand
        </IconButton>
      </Link>
      <SearchBar />
      <Box className="Navbar__box"></Box>
    </Stack>
  );
}
