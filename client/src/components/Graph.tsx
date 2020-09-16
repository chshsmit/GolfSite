/**
 * Graph.tsx
 * @author Christopher Smith
 * @description Main Graph component
 * @created 2020-09-16T13:54:38.707Z-07:00
 * @last-modified 2020-09-16T16:19:49.392Z-07:00
 */

import React, { useState, useEffect } from "react";
import { VictoryLine, VictoryChart } from "victory";
import GraphOptionSelect from "./GraphOptionSelect";

const Graph = (): React.ReactElement => {
  const [graphData, setGraphData] = useState([]);
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
          setGraphData(response);
        });
    }
  }, [graphOption]);

  console.log();

  return (
    <>
      <GraphOptionSelect
        value={graphOption}
        onChange={setGraphOption}
        graphOptions={graphOptions}
      />
      <VictoryChart domainPadding={40}>
        <VictoryLine data={graphData} x="Date" y="Score" />
      </VictoryChart>
    </>
  );
};

export default Graph;
