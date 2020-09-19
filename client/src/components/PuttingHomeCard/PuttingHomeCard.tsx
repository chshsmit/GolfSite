/**
 * PuttingHomeCard.tsx
 * @author Christopher Smith
 * @description Card that contains putting information
 * @created 2020-09-18T22:58:27.109Z-07:00
 * @last-modified 2020-09-19T10:55:51.312Z-07:00
 */

import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { puttingCardStyles } from "components/PuttingHomeCard/PuttingHomeCardUtils";

import { PuttingResponseObject } from "api/ApiResponseInterfaces";

const PuttingHomeCard = ({
  averagePuttsPerHole,
  totalHoles,
  totalPutts,
}: PuttingResponseObject): React.ReactElement => {
  console.log(averagePuttsPerHole);
  console.log(totalHoles);
  console.log(totalPutts);

  const classes = puttingCardStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Putting
        </Typography>
        <Typography variant="h6">Total Putts: {totalPutts}</Typography>
        <Typography variant="h6">Total Holes: {totalHoles}</Typography>
        <Typography variant="h6">Putts/Hole: {averagePuttsPerHole}</Typography>
      </CardContent>
    </Card>
  );
};

export default PuttingHomeCard;
