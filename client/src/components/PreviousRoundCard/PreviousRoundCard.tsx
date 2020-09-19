/**
 * PreviousRoundCard.tsx
 * @author Christopher Smith
 * @description Card to show information for a previous round
 * @created 2020-09-19T10:22:42.318Z-07:00
 * @last-modified 2020-09-19T15:49:21.226Z-07:00
 */

import React, { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { BaseRound, SingleRoundData } from "types/ApiResponseTypes";

import PreviousRoundCardMenu from "components/PreviousRoundCard/PreviousRoundCardMenu";
import { reformatDate, makeCamelCase } from "utils/utils";

const previousRoundCardStyles = makeStyles({
  root: {
    minWidth: "20%",
  },
  scoreContent: {
    textAlign: "center",
  },
});

const PreviousRoundCard = ({
  date,
  course,
  par,
  score,
}: BaseRound): React.ReactElement => {
  const classes = previousRoundCardStyles();

  const [roundData, setRoundData] = useState<SingleRoundData | null>(null);
  const [menuAnchorElement, setAnchorElement] = useState<HTMLElement | null>(
    null
  );

  const openMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElement(null);
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

  console.log(roundData);

  return roundData ? (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="round">
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
        title={course}
        subheader={reformatDate(date, "-")}
      />
      <CardContent className={classes.scoreContent}>
        <Typography variant="h4">
          <b>
            <u>Score</u>
          </b>
        </Typography>
        <Typography variant="h5">{score}</Typography>
        <Typography variant="h4">
          <b>
            <u>Over/Under</u>
          </b>
        </Typography>
        <Typography variant="h5">{roundData.overUnder.total}</Typography>
      </CardContent>
    </Card>
  ) : (
    <CircularProgress />
  );
};

export default PreviousRoundCard;
