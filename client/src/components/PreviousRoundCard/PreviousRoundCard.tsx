/**
 * PreviousRoundCard.tsx
 * @author Christopher Smith
 * @description Card to show information for a previous round
 * @created 2020-09-19T10:22:42.318Z-07:00
 * @last-modified 2020-09-19T16:41:33.263Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import clsx from "clsx";

import {
  Card,
  IconButton,
  CircularProgress,
  CardActions,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { BaseRound, SingleRoundData } from "types/ApiResponseTypes";

import PreviousRoundCardHeader from "components/PreviousRoundCard/PreviousRoundCardHeader";
import PreviousRoundCardContent from "components/PreviousRoundCard/PreviousRoundCardContent";
import PreviousRoundCardActions from "components/PreviousRoundCard/PreviousRoundCardActions";
import { makeCamelCase } from "utils/utils";

//---------------------------------------------------------------------------------------------------

const previousRoundCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "20%",
    },
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

const PreviousRoundCard = ({
  date,
  course,
  par,
  score,
}: BaseRound): React.ReactElement => {
  const classes = previousRoundCardStyles();
  const [roundData, setRoundData] = useState<SingleRoundData | null>(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    fetch(
      `http://127.0.0.1:5000/sheets/roundData/${makeCamelCase(
        course
      )}?date=${date}&score=${score}`
    )
      .then((res) => res.json())
      .then((response) => {
        setRoundData(response);
      });
  }, []);

  console.log(expanded);

  return roundData ? (
    <Card className={classes.root}>
      <PreviousRoundCardHeader course={course} par={par} date={date} />
      <PreviousRoundCardContent
        score={score}
        totalOverUnder={roundData.overUnder.total}
      />
      <PreviousRoundCardActions />
    </Card>
  ) : (
    <CircularProgress />
  );
};

export default PreviousRoundCard;
