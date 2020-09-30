/**
 * CustomTooltip.tsx
 * @author Christopher Smith
 * @description custom tooltip for graph
 * @created 2020-09-17T16:19:42.149Z-07:00
 * @last-modified 2020-09-30T13:38:15.277Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";
import { TooltipProps } from "recharts";
import { makeStyles } from "@material-ui/core/styles";

//---------------------------------------------------------------------------------------------------

const customTooltipStyles = makeStyles({
  customTooltip: {
    border: "1px solid black",
    padding: "5px",
    backgroundColor: "lightgrey",
    borderRadius: "25px",
  },
});

//---------------------------------------------------------------------------------------------------

const CustomTooltip = ({
  payload,
  active,
}: TooltipProps): React.ReactElement | null => {
  const classes = customTooltipStyles();

  return active && payload ? (
    <div className={classes.customTooltip}>
      <p>Course: {payload[0].payload.course}</p>
      {payload[0].payload.par && <p>Par: {payload[0].payload.par}</p>}
      {payload[0].payload.score && <p>Score: {payload[0].payload.score}</p>}
      {payload[0].payload.overUnder && (
        <p>Over/Under: {payload[0].payload.overUnder}</p>
      )}
      {payload[0].payload.differential && (
        <p>Differential: {payload[0].payload.differential}</p>
      )}
      {payload[0].payload.rating && <p>Rating: {payload[0].payload.rating}</p>}
      {payload[0].payload.slope && <p>Slope: {payload[0].payload.slope}</p>}
    </div>
  ) : null;
};

export default CustomTooltip;
