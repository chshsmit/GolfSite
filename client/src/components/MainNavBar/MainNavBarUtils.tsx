/**
 * MainNavBarUtils.tsx
 * @author Christopher Smith
 * @description Interface and styles
 * @created 2020-09-18T16:21:52.785Z-07:00
 * @copyright
 * @last-modified 2020-09-19T16:46:16.800Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

//---------------------------------------------------------------------------------------------------

export interface MainNavBarProps {
  currentScreen: string;
}

export const mainNavBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
