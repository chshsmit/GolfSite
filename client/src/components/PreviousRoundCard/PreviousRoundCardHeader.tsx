/**
 * PreviousRoundCardHeader.ysx
 * @author Christopher Smith
 * @description
 * @created 2020-09-19T16:20:04.028Z-07:00
 * @copyright
 * @last-modified 2020-09-19T16:30:42.886Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React, { useState } from "react";

import { CardHeader, IconButton, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import PreviousRoundCardMenu from "components/PreviousRoundCard/PreviousRoundCardMenu";
import { reformatDate } from "utils/utils";

//---------------------------------------------------------------------------------------------------

const previousRoundCardHeaderStyles = makeStyles({
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
});

interface PreviousRoundCardHeaderProps {
  course: string;
  date: string;
  par: number;
}

//---------------------------------------------------------------------------------------------------

const PreviousRoundCardHeader = ({
  course,
  date,
  par,
}: PreviousRoundCardHeaderProps): React.ReactElement => {
  const classes = previousRoundCardHeaderStyles();

  const [menuAnchorElement, setAnchorElement] = useState<HTMLElement | null>(
    null
  );

  const openMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElement(null);
  };

  return (
    <CardHeader
      avatar={(
        <Avatar aria-label="round" className={classes.green}>
          {course
            .match(/\b(\w)/g)
            ?.slice(0, 2)
            .join("")}
        </Avatar>
      )}
      action={(
        <>
          <IconButton aria-label="more-round-info" onClick={openMenu}>
            <MoreVertIcon />
          </IconButton>
          <PreviousRoundCardMenu
            anchorElement={menuAnchorElement}
            onClose={handleMenuClose}
          />
        </>
      )}
      title={`${course} - ${par}`}
      subheader={reformatDate(date, "-")}
    />
  );
};

export default PreviousRoundCardHeader;
