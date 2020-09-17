/**
 * Graph.tsx
 * @author Christopher Smith
 * @description Main Graph component
 * @created 2020-09-16T13:54:38.707Z-07:00
 * @last-modified 2020-09-17T16:28:02.851Z-07:00
 */

import React, { useState, useEffect } from "react";
import GraphOptionSelect from "./GraphOptionSelect";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const Graph = (): React.ReactElement => {
  const [graphData, setGraphData] = useState([]);
  const [axes, setAxes] = useState({ xAxis: "", yAxis: "" });
  const [graphOption, setGraphOption] = useState("");
  const [graphOptions, setGraphOptions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/graphOptions")
      .then((res) => res.json())
      .then((response) => setGraphOptions(response));
  }, []);

  useEffect(() => {
    if (graphOption !== "") {
      fetch(`http://127.0.0.1:5000/sheets/${graphOption}`)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setAxes(response.axisData);
          setGraphData(response.graphData);
        });
    }
  }, [graphOption]);

  console.log(axes);

  return (
    <>
      <GraphOptionSelect
        value={graphOption}
        onChange={setGraphOption}
        graphOptions={graphOptions}
      />
      <LineChart
        width={600}
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
    </>
  );
};

export default Graph;
