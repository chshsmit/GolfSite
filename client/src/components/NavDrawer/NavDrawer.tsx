/**
 * NavDrawer.tsx
 * @author Christopher Smith
 * @description Nav Drawer for links
 * @created 2020-09-18T16:26:36.420Z-07:00
 * @last-modified 2020-09-18T16:45:56.606Z-07:00
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import {
  navDrawerStyles,
  NavDrawerProps,
} from "components/NavDrawer/NavDrawerUtils";

const NavDrawer = ({
  drawerIsOpen,
  toggleDrawer,
}: NavDrawerProps): React.ReactElement => {
  const classes = navDrawerStyles();

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>

      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      <Drawer anchor="left" open={drawerIsOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
