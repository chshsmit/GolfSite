/**
 * HomePage.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-17T21:41:29.992Z-07:00
 * @last-modified 2020-09-18T17:46:41.705Z-07:00
 */

import React from "react";
import MainNavBar from "components/MainNavBar/MainNavBar";

const HomePage = (): React.ReactElement => {
  return (
    <>
      <MainNavBar currentScreen="Home" />
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
