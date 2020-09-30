/**
 * RoundTable.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-30T13:42:32.862Z-07:00
 * @last-modified 2020-09-30T14:27:20.387Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { SingleRoundData } from "types/ApiResponseTypes";
import RoundTableHeader from "components/RoundTable/RoundTableHeader";

//---------------------------------------------------------------------------------------------------

interface RoundTableProps {
  roundData: SingleRoundData | null;
}

const roundTableStyles = makeStyles({
  roundTableContainer: {
    marginLeft: "2%",
    marginRight: "2%",
  },
  inOutTotalRow: {
    backgroundColor: "lightgrey",
  },
});

//---------------------------------------------------------------------------------------------------

const RoundTable = ({ roundData }: RoundTableProps): React.ReactElement => {
  console.log(roundData);
  const classes = roundTableStyles();

  const frontNine: React.ReactElement[] = [];
  const backNine: React.ReactElement[] = [];

  for (let loopIndex = 1; loopIndex <= 18; loopIndex++) {
    const newRow = (
      <TableRow key={`hole${loopIndex}`}>
        <TableCell component="th" scope="row">{`Hole ${loopIndex}`}</TableCell>
        <TableCell align="right">
          {roundData?.par[`hole${loopIndex}`]}
        </TableCell>
        <TableCell align="right">
          {roundData?.strokes[`hole${loopIndex}`]}
        </TableCell>
        <TableCell align="right">
          {roundData?.overUnder[`hole${loopIndex}`]}
        </TableCell>
        <TableCell align="right">
          {roundData?.putts[`hole${loopIndex}`]}
        </TableCell>
        <TableCell align="right">
          {roundData?.gir[`hole${loopIndex}`]}
        </TableCell>
      </TableRow>
    );

    loopIndex < 10 ? frontNine.push(newRow) : backNine.push(newRow);
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="round table">
        <RoundTableHeader />
        <TableBody>
          {frontNine}
          <TableRow
            className={classes.inOutTotalRow}
            key="out"
            aria-label="out"
          >
            <TableCell component="th" scope="row">
              Out
            </TableCell>
            <TableCell align="right">{roundData?.par.out}</TableCell>
            <TableCell align="right">{roundData?.strokes.out}</TableCell>
            <TableCell align="right">{roundData?.overUnder.out}</TableCell>
            <TableCell align="right">{roundData?.putts.out}</TableCell>
            <TableCell align="right">{roundData?.gir.out}</TableCell>
          </TableRow>
          {backNine}
          <TableRow className={classes.inOutTotalRow} key="in" aria-label="in">
            <TableCell component="th" scope="row">
              In
            </TableCell>
            <TableCell align="right">{roundData?.par.in}</TableCell>
            <TableCell align="right">{roundData?.strokes.in}</TableCell>
            <TableCell align="right">{roundData?.overUnder.in}</TableCell>
            <TableCell align="right">{roundData?.putts.in}</TableCell>
            <TableCell align="right">{roundData?.gir.in}</TableCell>
          </TableRow>
          <TableRow
            className={classes.inOutTotalRow}
            key="total"
            aria-label="total"
          >
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right">{roundData?.par.total}</TableCell>
            <TableCell align="right">{roundData?.strokes.total}</TableCell>
            <TableCell align="right">{roundData?.overUnder.total}</TableCell>
            <TableCell align="right">{roundData?.putts.total}</TableCell>
            <TableCell align="right">{roundData?.gir.total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoundTable;
