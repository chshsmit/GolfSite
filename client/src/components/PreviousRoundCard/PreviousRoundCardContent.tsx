/**
 * PreviousRoundCardContent.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-19T16:31:38.748Z-07:00
 * @copyright
 * @last-modified 2020-09-20T12:36:54.156Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";
import { CardContent, Typography, CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//---------------------------------------------------------------------------------------------------

const previousRoundCardContentStyles = makeStyles({
  scoreText: {
    marginBottom: "3%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

interface PreviousRoundCardContentProps {
  score: number;
  totalOverUnder: number;
  courseName: string;
}

//---------------------------------------------------------------------------------------------------

const PreviousRoundCardContent = ({
  score,
  totalOverUnder,
  courseName,
}: PreviousRoundCardContentProps): React.ReactElement => {
  const classes = previousRoundCardContentStyles();

  let cardImage;

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cardImage = require(`static/images/${courseName}.jpg`);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cardImage = require("static/images/default.jpg");
  }

  return (
    <>
      <CardMedia
        className={classes.media}
        image={cardImage}
        title="courseImage"
      />
      <CardContent>
        <Grid container justify="space-evenly">
          <Typography variant="h6">
            <b>Score</b>: {score}
          </Typography>
          <Typography variant="h6">
            <b>Over/Under</b>: {totalOverUnder}
          </Typography>
        </Grid>
      </CardContent>
    </>
  );
};

export default PreviousRoundCardContent;
