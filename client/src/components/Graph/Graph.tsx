/**
 * Graph.tsx
 * @author Christopher Smith
 * @description Main Graph component
 * @created 2020-09-16T13:54:38.707Z-07:00
 * @last-modified 2020-09-18T17:58:46.576Z-07:00
 */

import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "components/Graph/CustomTooltip";
import { CircularProgress, LinearProgress } from "@material-ui/core";

interface GraphProps {
  graphOption: string;
}

const Graph = ({ graphOption }: GraphProps): React.ReactElement => {
  const [graphData, setGraphData] = useState([]);
  const [axes, setAxes] = useState({ xAxis: "", yAxis: "" });
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    fetch(`http://127.0.0.1:5000/sheets/${graphOption}`)
      .then((res) => res.json())
      .then((response) => {
        setAxes(response.axisData);
        setGraphData(response.graphData);
        setDataLoading(false);
      });
  }, [graphOption]);

  return dataLoading ? (
    <CircularProgress />
  ) : (
    <LineChart
      width={800}
      height={300}
      data={graphData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey={axes.yAxis} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={axes.xAxis} />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
};

export default Graph;
