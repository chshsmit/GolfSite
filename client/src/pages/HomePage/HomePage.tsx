/**
 * HomePage.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-17T21:41:29.992Z-07:00
 * @last-modified 2020-09-20T12:21:34.647Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { HomepageDataResponse } from "types/ApiResponseTypes";
import MainNavBar from "components/MainNavBar/MainNavBar";
import PuttingHomeCard from "components/PuttingHomeCard/PuttingHomeCard";
import HandicapHomeCard from "components/HandicapHomeCard/HandicapHomeCard";
import PreviousRoundCard from "components/PreviousRoundCard/PreviousRoundCard";

//---------------------------------------------------------------------------------------------------

const homepageStyles = makeStyles({
  cardRow: {
    marginTop: "2%",
  },
  lastThreeRoundsContainer: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    margin: "0px",
  },
  lastThreeRoundsTitle: {
    marginLeft: "2%",
    marginBottom: "2%",
  },
});

//---------------------------------------------------------------------------------------------------

const HomePage = (): React.ReactElement => {
  const classes = homepageStyles();

  const [homePageData, setHomePageData] = useState<HomepageDataResponse | null>(
    null
  );

  useEffect(() => {
    fetch("http://127.0.0.1:5000/sheets/homepageData")
      .then((res) => res.json())
      .then((response) => {
        setHomePageData(response);
      });
  }, []);

  return (
    <>
      <MainNavBar currentScreen="Home" />
      <Grid
        container
        direction="row"
        className={classes.lastThreeRoundsContainer}
        justify="center"
        spacing={2}
      >
        {homePageData ? (
          <>
            <Grid item xs={12}>
              <h1 className={classes.lastThreeRoundsTitle}>
                <u>Last Three Rounds</u>
              </h1>
            </Grid>
            {homePageData.lastThree.map((round) => {
              console.log(round);
              return (
                <Grid
                  xs={4}
                  item
                  key={`${round.date}-${round.course}-${round.score}`}
                >
                  <PreviousRoundCard {...round} />
                </Grid>
              );
            })}
          </>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </>
  );
};

export default HomePage;
