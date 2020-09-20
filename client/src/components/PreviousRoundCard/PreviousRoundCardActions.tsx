/**
 * PreviousRoundCardActions.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-19T16:37:17.051Z-07:00
 * @copyright
 * @last-modified 2020-09-20T11:24:14.595Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";
import clsx from "clsx";
import { CardActions, IconButton } from "@material-ui/core";
import { RoundCategoryNumberData } from "types/ApiResponseTypes";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PreviousRoundCardCollapse from "components/PreviousRoundCard/PreviousRoundCardCollapse";

//---------------------------------------------------------------------------------------------------

interface PreviousRoundCardActionsProps {
  strokesInfo: RoundCategoryNumberData;
  parInfo: RoundCategoryNumberData;
}

const previousRoundCardActionsStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

//---------------------------------------------------------------------------------------------------

const PreviousRoundCardActions = ({
  strokesInfo,
  parInfo,
}: PreviousRoundCardActionsProps): React.ReactElement => {
  const classes = previousRoundCardActionsStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(strokesInfo);
  console.log(parInfo);

  return (
    <>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <PreviousRoundCardCollapse
        strokesInfo={strokesInfo}
        parInfo={parInfo}
        expanded={expanded}
      />
    </>
  );
};

export default PreviousRoundCardActions;
