/**
 * HomePage.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-17T21:41:29.992Z-07:00
 * @last-modified 2020-09-17T21:59:40.087Z-07:00
 */

import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import GraphOptionSelect from "components/Graph/GraphOptionSelect";
import Graph from "components/Graph/Graph";
import "pages/HomePage/HomePage.css";

const HomePage = (): React.ReactElement => {
  const [graphOptions, setGraphOptions] = useState([]);
  const [graphOption, setGraphOption] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/graphOptions")
      .then((res) => res.json())
      .then((response) => setGraphOptions(response));
  }, []);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <GraphOptionSelect
          value={graphOption}
          onChange={setGraphOption}
          graphOptions={graphOptions}
        />
      </Grid>
      <Grid item>
        <Graph graphOption={graphOption} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
