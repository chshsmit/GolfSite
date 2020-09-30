/**
 * Rounds.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-25T14:43:31.365Z-07:00
 * @copyright
 * @last-modified 2020-09-30T14:02:11.359Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";

import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import MainNavBar from "components/MainNavBar/MainNavBar";
import RoundTable from "components/RoundTable/RoundTable";

import { makeRegularCase, reformatDate } from "utils/utils";

//---------------------------------------------------------------------------------------------------

const roundsStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
  })
);

interface RoundsProps {
  round?: string;
}

//---------------------------------------------------------------------------------------------------

const Rounds = ({ round = "" }: RoundsProps): React.ReactElement => {
  const classes = roundsStyles();
  const [roundOptions, setRoundOptions] = useState([]);
  const [roundDataLoading, setRoundDataLoading] = useState(false);
  const [selectedRound, changeSelectedRound] = useState(round);
  const [selectedRoundData, setSelectedRoundData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/sheets/roundOptions")
      .then((res) => res.json())
      .then((response) => {
        setRoundOptions(response);
      });
  }, []);

  useEffect(() => {
    if (selectedRound !== "") {
      setRoundDataLoading(true);
      fetch(`http://127.0.0.1:5000/sheets/roundData/${selectedRound}`)
        .then((res) => res.json())
        .then((response) => {
          setSelectedRoundData(response);
          setRoundDataLoading(false);
        });
    }
  }, [selectedRound]);

  const options = roundOptions.map((round: string) => {
    const courseAndScore = round.substring(11).split("-");
    const date = round.substring(0, 10);

    return (
      <MenuItem
        key={round}
        value={`${courseAndScore[0]}?date=${date}&score=${courseAndScore[1]}`}
      >
        {`${makeRegularCase(courseAndScore[0])} ${reformatDate(date, "-")}`}
      </MenuItem>
    );
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    changeSelectedRound(event.target.value as string);

  return (
    <>
      <MainNavBar currentScreen="Rounds" />
      <Grid container direction="column" justify="center"
        alignItems="center">
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id="roundOptionsSelectLabel">Rounds</InputLabel>
            <Select
              labelId="roundOptionsSelectLabel"
              value={selectedRound}
              onChange={handleChange}
            >
              {options}
            </Select>
          </FormControl>
        </Grid>
        {roundDataLoading ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : selectedRound ? (
          <RoundTable roundData={selectedRoundData} />
        ) : (
          <Grid item>
            <h3>Please select a round</h3>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Rounds;
