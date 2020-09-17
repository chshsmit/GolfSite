/**
 * CustomTooltip.tsx
 * @author Christopher Smith
 * @description custom tooltip for graph
 * @created 2020-09-17T16:19:42.149Z-07:00
 * @last-modified 2020-09-17T16:33:41.658Z-07:00
 */

import React from "react";
import { TooltipProps } from "recharts";

const CustomTooltip = ({
  payload,
  active,
}: TooltipProps): React.ReactElement | null => {
  return active && payload ? (
    <div className="custom-tooltip">
      <p>Course: {payload[0].payload.Course}</p>
      <p>Par: {payload[0].payload.Par}</p>
    </div>
  ) : null;
};

export default CustomTooltip;
