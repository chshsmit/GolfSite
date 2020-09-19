/**
 * HomePage.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-17T21:41:29.992Z-07:00
 * @last-modified 2020-09-19T11:15:14.719Z-07:00
 */

import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@material-ui/core";

import { homepageStyles } from "pages/HomePage/HomePageUtils";
import { HomepageDataResponse } from "types/ApiResponseTypes";
import MainNavBar from "components/MainNavBar/MainNavBar";
import PuttingHomeCard from "components/PuttingHomeCard/PuttingHomeCard";
import HandicapHomeCard from "components/HandicapHomeCard/HandicapHomeCard";
import PreviousRoundCard from "components/PreviousRoundCard/PreviousRoundCard";

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
        >
          <Grid item xs={12}>
            <h1>Last Three Rounds</h1>
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
