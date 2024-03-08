import React, { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon onClick={onClick} />
          </IconButton>

          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to={"/about-us"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">About us</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={onClick}>
        <NavListDrawer />
      </Drawer>
    </div>
  );
}
