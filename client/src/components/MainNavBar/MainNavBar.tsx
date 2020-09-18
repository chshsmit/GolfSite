/**
 * MainNavBar.tsx
 * @author Christopher Smith
 * @description The nav bar at the top of the screen
 * @created 2020-09-18T16:09:34.683Z-07:00
 * @copyright
 * @last-modified 2020-09-18T16:24:45.912Z-07:00
 */

import React from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import {
  MainNavBarProps,
  mainNavBarStyles,
} from "components/MainNavBar/MainNavBarUtils";
import MenuIcon from "@material-ui/icons/Menu";

const MainNavBar = ({ currentScreen }: MainNavBarProps): React.ReactElement => {
  const classes = mainNavBarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
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
