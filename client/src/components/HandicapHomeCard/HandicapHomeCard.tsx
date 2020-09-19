/**
 * HandicapHomeCard.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-19T10:10:43.777Z-07:00
 * @last-modified 2020-09-19T11:01:25.435Z-07:00
 */

/**
 * PuttingHomeCard.tsx
 * @author Christopher Smith
 * @description Card that contains putting information
 * @created 2020-09-18T22:58:27.109Z-07:00
 * @last-modified 2020-09-18T23:16:17.615Z-07:00
 */

import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { HandicapReponseObject } from "types/ApiResponseTypes";

const handicapCardStyles = makeStyles({
  root: {
    maxWidth: 275,
    minHeight: 175,
  },
});

const HandicapHomeCard = ({
  handicapDifferential,
  totalRounds,
}: HandicapReponseObject): React.ReactElement => {
  const classes = handicapCardStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Handicap
        </Typography>
        <Typography variant="h6">
          Differential: {handicapDifferential}
        </Typography>
        <Typography variant="h6">Total Rounds: {totalRounds}</Typography>
      </CardContent>
    </Card>
  );
};

export default HandicapHomeCard;
