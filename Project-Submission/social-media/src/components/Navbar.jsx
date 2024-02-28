import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import DeckIcon from '@mui/icons-material/Deck';
import React from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})
const Navbar = () => {
  return <AppBar position="sticky">
    <Toolbar>

      <Typography variant="h6" sx={{ display: { xs: "none", sm: 'block' } }}>Goa Social</Typography>
      <DeckIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
    </Toolbar>
  </AppBar>;
};

export default Navbar;
