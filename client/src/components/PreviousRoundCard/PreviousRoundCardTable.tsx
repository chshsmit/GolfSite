/**
 * PreviousRoundCardTable.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-20T11:26:50.113Z-07:00
 * @last-modified 2020-09-20T11:59:56.314Z-07:00
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

import { RoundCategoryNumberData } from "types/ApiResponseTypes";

//---------------------------------------------------------------------------------------------------

interface PreviousRoundCardTableProps {
  strokesInfo: RoundCategoryNumberData;
  parInfo: RoundCategoryNumberData;
}

const previousRoundCardTableStyles = makeStyles({
  inOutTotalRow: {
    backgroundColor: "lightgrey",
  },
});

//---------------------------------------------------------------------------------------------------

const PreviousRoundCardTable = ({
  strokesInfo,
  parInfo,
}: PreviousRoundCardTableProps): React.ReactElement => {
  const classes = previousRoundCardTableStyles();

  const frontNine: React.ReactElement[] = [];
  const backNine: React.ReactElement[] = [];

  let loopIndex = 1;

  for (loopIndex; loopIndex < 10; loopIndex++) {
    frontNine.push(
      <TableRow key={`hole${loopIndex}`}>
        <TableCell component="th" scope="row">
          {`Hole ${loopIndex}`}
        </TableCell>
        <TableCell align="right">{parInfo[`hole${loopIndex}`]}</TableCell>
        <TableCell align="right">{strokesInfo[`hole${loopIndex}`]}</TableCell>
      </TableRow>
    );
  }

  for (loopIndex; loopIndex < 19; loopIndex++) {
    backNine.push(
      <TableRow key={`hole${loopIndex}`}>
        <TableCell component="th" scope="row">
          {`Hole ${loopIndex}`}
        </TableCell>
        <TableCell align="right">{parInfo[`hole${loopIndex}`]}</TableCell>
        <TableCell align="right">{strokesInfo[`hole${loopIndex}`]}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="round table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Hole</b>
            </TableCell>
            <TableCell align="right">
              <b>Par</b>
            </TableCell>
            <TableCell align="right">
              <b>Strokes</b>
            </TableCell>
          </TableRow>
        </TableHead>
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
            <TableCell align="right">{parInfo.out}</TableCell>
            <TableCell align="right">{strokesInfo.out}</TableCell>
          </TableRow>
          {backNine}
          <TableRow className={classes.inOutTotalRow} key="in" aria-label="in">
            <TableCell component="th" scope="row">
              In
            </TableCell>
            <TableCell align="right">{parInfo.in}</TableCell>
            <TableCell align="right">{strokesInfo.in}</TableCell>
          </TableRow>
          <TableRow
            className={classes.inOutTotalRow}
            key="total"
            aria-label="total"
          >
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right">{parInfo.total}</TableCell>
            <TableCell align="right">{strokesInfo.total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PreviousRoundCardTable;
