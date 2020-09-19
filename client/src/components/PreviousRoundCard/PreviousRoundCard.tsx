/**
 * PreviousRoundCard.tsx
 * @author Christopher Smith
 * @description Card to show information for a previous round
 * @created 2020-09-19T10:22:42.318Z-07:00
 * @last-modified 2020-09-19T11:19:41.650Z-07:00
 */

import React from "react";

import { Card, CardHeader, Avatar } from "@material-ui/core";

import { BaseRound } from "types/ApiResponseTypes";

const PreviousRoundCard = ({
  date,
  course,
  par,
  score,
}: BaseRound): React.ReactElement => {
  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="round">
            {course
              .match(/\b(\w)/g)
              ?.slice(0, 2)
              .join("")}
          </Avatar>
        )}
      />
    </Card>
  );
};

export default PreviousRoundCard;
