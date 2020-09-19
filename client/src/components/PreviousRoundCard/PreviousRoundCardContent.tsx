/**
 * PreviousRoundCardContent.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-19T16:31:38.748Z-07:00
 * @copyright
 * @last-modified 2020-09-19T16:35:18.188Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//---------------------------------------------------------------------------------------------------

const previousRoundCardContentStyles = makeStyles({
  scoreContent: {
    textAlign: "center",
  },
  scoreText: {
    marginBottom: "3%",
  },
});

interface PreviousRoundCardContentProps {
  score: number;
  totalOverUnder: number;
}

//---------------------------------------------------------------------------------------------------

const PreviousRoundCardContent = ({
  score,
  totalOverUnder,
}: PreviousRoundCardContentProps): React.ReactElement => {
  const classes = previousRoundCardContentStyles();

  return (
    <CardContent className={classes.scoreContent}>
      <Typography variant="h5">
        <b>Score</b>
      </Typography>
      <Typography variant="h5" className={classes.scoreText}>
        {score}
      </Typography>
      <Typography variant="h5">
        <b>Over/Under</b>
      </Typography>
      <Typography variant="h5">{totalOverUnder}</Typography>
    </CardContent>
  );
};

export default PreviousRoundCardContent;
