/**
 * Graph.tsx
 * @author Christopher Smith
 * @description Main Graph component
 * @created 2020-09-16T13:54:38.707Z-07:00
 * @last-modified 2020-09-16T18:02:13.600Z-07:00
 */

import React, { useState, useEffect } from "react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import GraphOptionSelect from "./GraphOptionSelect";

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

  console.log(graphData);

  return (
    <>
      <GraphOptionSelect
        value={graphOption}
        onChange={setGraphOption}
        graphOptions={graphOptions}
      />
      <VictoryChart domainPadding={40}>
        <VictoryAxis
          axisLabelComponent={<VictoryLabel />}
          scale={{ x: "time" }}
          fixLabelOverlap
          style={{
            axisLabel: {
              fontFamily: "inherit",
              fontWeight: 100,
              stroke: "white",
              fontSize: 12,
            },
            grid: { stroke: "lightgrey" },
            tickLabels: {
              fontFamily: "inherit",
              fontWeight: 100,
              fontSize: 12,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          axisLabelComponent={<VictoryLabel />}
          label={"Number of Commits"}
          fixLabelOverlap
          style={{
            axisLabel: {
              fontFamily: "inherit",
              fontWeight: 100,
              stroke: "white",
              fontSize: 12,
              margin: "30px",
            },
            grid: { stroke: "lightgrey" },
            tickLabels: {
              fontFamily: "inherit",
              fontWeight: 100,
              fontSize: 12,
              marginBlock: "20px",
            },
          }}
        />
        <VictoryLine data={graphData} x={axes.xAxis} y={axes.yAxis} />
      </VictoryChart>
    </>
  );
};

export default Graph;
