/**
 * PreviousRoundCard.tsx
 * @author Christopher Smith
 * @description Card to show information for a previous round
 * @created 2020-09-19T10:22:42.318Z-07:00
 * @last-modified 2020-09-19T16:43:57.864Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";

import { Card, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BaseRound, SingleRoundData } from "types/ApiResponseTypes";

import PreviousRoundCardHeader from "components/PreviousRoundCard/PreviousRoundCardHeader";
import PreviousRoundCardContent from "components/PreviousRoundCard/PreviousRoundCardContent";
import PreviousRoundCardActions from "components/PreviousRoundCard/PreviousRoundCardActions";
import { makeCamelCase } from "utils/utils";

//---------------------------------------------------------------------------------------------------

const previousRoundCardStyles = makeStyles({
  root: {
    minWidth: "20%",
  },
});

//---------------------------------------------------------------------------------------------------

const PreviousRoundCard = ({
  date,
  course,
  par,
  score,
}: BaseRound): React.ReactElement => {
  const classes = previousRoundCardStyles();
  const [roundData, setRoundData] = useState<SingleRoundData | null>(null);

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
  }, [course, date, score]);

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
