/**
 * HomePage.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-17T21:41:29.992Z-07:00
 * @last-modified 2020-09-19T16:47:27.225Z-07:00
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
    marginTop: "2%",
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
        justify="space-around"
        className={classes.cardRow}
      >
        {homePageData ? (
          <>
            <Grid item xs={3}>
              <PuttingHomeCard {...homePageData.putting} />
            </Grid>
            <Grid item xs={3}>
              <HandicapHomeCard {...homePageData.handicap} />
            </Grid>
          </>
        ) : (
          <CircularProgress />
        )}
      </Grid>
      {homePageData ? (
        <Grid
          container
          direction="row"
          className={classes.lastThreeRoundsContainer}
          justify="space-around"
        >
          <Grid item xs={12}>
            <h1 className={classes.lastThreeRoundsTitle}>
              <u>Last Three Rounds</u>
            </h1>
          </Grid>
          {homePageData.lastThree.map((round) => {
            console.log(round);
            return (
              <PreviousRoundCard
                {...round}
                key={`${round.date}-${round.course}-${round.score}`}
              />
            );
          })}
        </Grid>
      ) : null}
    </>
  );
};

export default HomePage;
