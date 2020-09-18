/**
 * MainNavBar.tsx
 * @author Christopher Smith
 * @description The nav bar at the top of the screen
 * @created 2020-09-18T16:09:34.683Z-07:00
 * @copyright
 * @last-modified 2020-09-18T16:49:19.855Z-07:00
 */

import React, { useState } from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import {
  MainNavBarProps,
  mainNavBarStyles,
} from "components/MainNavBar/MainNavBarUtils";
import MenuIcon from "@material-ui/icons/Menu";

import NavDrawer from "components/NavDrawer/NavDrawer";

const MainNavBar = ({ currentScreen }: MainNavBarProps): React.ReactElement => {
  const classes = mainNavBarStyles();
  const [drawerIsOpen, openCloseDrawer] = useState(false);

  const toggleDrawer = () => {
    openCloseDrawer(!drawerIsOpen);
  };

  return (
    <div className={classes.root}>
      <NavDrawer drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {currentScreen}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainNavBar;
