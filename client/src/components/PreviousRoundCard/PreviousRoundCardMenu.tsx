/**
 * PreviousRoundCardMenu.tsx
 * @author Christopher Smith
 * @description Menu for vertical icon in a previous round card
 * @created 2020-09-19T15:31:50.528Z-07:00
 * @last-modified 2020-09-19T15:49:45.204Z-07:00
 */

import React from "react";
import { Menu, MenuItem } from "@material-ui/core";

interface PreviousRoundCardMenuProps {
  anchorElement: HTMLElement | null;
  onClose: () => void;
}

const PreviousRoundCardMenu = ({
  anchorElement,
  onClose,
}: PreviousRoundCardMenuProps): React.ReactElement => {
  return (
    <Menu
      anchorEl={anchorElement}
      open={Boolean(anchorElement)}
      id="previous-round-menu"
      keepMounted
      onClose={onClose}
    >
      <MenuItem>Detailed View</MenuItem>
    </Menu>
  );
};

export default PreviousRoundCardMenu;
