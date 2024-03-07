import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: Props) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor="left"
      style={{ maxWidth: 200 }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Aprende Sobre React y Material UI" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
