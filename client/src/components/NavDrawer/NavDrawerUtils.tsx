/**
 * NavDrawerUtils.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-18T16:42:38.209Z-07:00
 * @copyright
 * @last-modified 2020-09-18T16:45:05.703Z-07:00
 */

import { makeStyles } from "@material-ui/core/styles";

export const navDrawerStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export interface NavDrawerProps {
  drawerIsOpen: boolean;
  toggleDrawer: () => void;
}
