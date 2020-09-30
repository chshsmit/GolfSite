/**
 * RoundTableHeader.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-30T14:07:26.658Z-07:00
 * @last-modified 2020-09-30T14:29:38.473Z-07:00
 */

//---------------------------------------------------------------------------------------------------
import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------

const RoundTableHeader = (): React.ReactElement => (
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
      <TableCell align="right">
        <b>Over/Under</b>
      </TableCell>
      <TableCell align="right">
        <b>Putts</b>
      </TableCell>
      <TableCell align="right">
        <b>GIR</b>
      </TableCell>
    </TableRow>
  </TableHead>
);

export default RoundTableHeader;
