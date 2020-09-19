/**
 * NavDrawer.tsx
 * @author Christopher Smith
 * @description Nav Drawer for links
 * @created 2020-09-18T16:26:36.420Z-07:00
 * @last-modified 2020-09-18T17:43:35.677Z-07:00
 */

import React from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import HomeIcon from "@material-ui/icons/Home";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";

import {
  navDrawerStyles,
  NavDrawerProps,
} from "components/NavDrawer/NavDrawerUtils";

const NavDrawer = ({
  drawerIsOpen,
  toggleDrawer,
}: NavDrawerProps): React.ReactElement => {
  const classes = navDrawerStyles();
  const history = useHistory();

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem button onClick={() => history.push("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push("/play-data")}>
          <ListItemIcon>
            <GraphicEqIcon />
          </ListItemIcon>
          <ListItemText primary="Play Data" />
        </ListItem>
        <ListItem button onClick={() => history.push("/courses")}>
          <ListItemIcon>
            <GolfCourseIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
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
