/**
 * PlayData.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-18T17:40:43.966Z-07:00
 * @copyright
 * @last-modified 2020-09-19T16:47:35.942Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import GraphOptionSelect from "components/Graph/GraphOptionSelect";
import MainNavBar from "components/MainNavBar/MainNavBar";
import Graph from "components/Graph/Graph";

//---------------------------------------------------------------------------------------------------

const PlayData = (): React.ReactElement => {
  const [graphOptions, setGraphOptions] = useState([]);
  const [graphOption, setGraphOption] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/options/graph")
      .then((res) => res.json())
      .then((response) => {
        setGraphOptions(response);
      });
  }, []);

  return (
    <>
      <MainNavBar currentScreen="Play Data" />
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
          {graphOption !== "" ? (
            <Graph graphOption={graphOption} />
          ) : (
            <h3>Please select an option</h3>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default PlayData;
