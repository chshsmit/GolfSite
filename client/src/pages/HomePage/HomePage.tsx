/**
 * HomePage.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-17T21:41:29.992Z-07:00
 * @last-modified 2020-09-18T23:21:51.187Z-07:00
 */

import React, { useState, useEffect } from "react";
import MainNavBar from "components/MainNavBar/MainNavBar";
import PuttingHomeCard from "components/PuttingHomeCard/PuttingHomeCard";
import { CircularProgress, Grid } from "@material-ui/core";

import { HomepageDataResponse } from "api/ApiResponseInterfaces";

const HomePage = (): React.ReactElement => {
  const [homePageData, setHomePageData] = useState<HomepageDataResponse | null>(
    null
  );
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    fetch("http://127.0.0.1:5000/sheets/homepageData")
      .then((res) => res.json())
      .then((response) => {
        setHomePageData(response);
        setDataLoading(false);
      });
  }, []);

  return (
    <>
      <MainNavBar currentScreen="Home" />
      {homePageData ? (
        <Grid container direction="row" justify="center">
          <PuttingHomeCard {...homePageData.putting} />
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default HomePage;
