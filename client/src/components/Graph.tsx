/**
 * Graph.tsx
 * @author Christopher Smith
 * @description Main Graph component
 * @created 2020-09-16T13:54:38.707Z-07:00
 * @last-modified 2020-09-16T14:31:29.299Z-07:00
 */

import React, { useState, useEffect } from "react";
import { VictoryLine, VictoryChart } from "victory";

const Graph = (): React.ReactElement => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/sheets/fullCourses")
      .then((res) => res.json())
      .then((response) => {
        setGraphData(response);
      });
  }, []);

  return (
    <div>
      <VictoryChart domainPadding={40}>
        <VictoryLine data={graphData} x="Date" y="Score" />
      </VictoryChart>
    </div>
  );
};

export default Graph;
