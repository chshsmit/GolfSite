/**
 * RoundTable.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-30T13:42:32.862Z-07:00
 * @last-modified 2020-09-30T14:02:01.662Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";
import { Grid } from "@material-ui/core";

import { SingleRoundData } from "types/ApiResponseTypes";

//---------------------------------------------------------------------------------------------------

interface RoundTableProps {
  roundData: SingleRoundData | null;
}

//---------------------------------------------------------------------------------------------------

const RoundTable = ({ roundData }: RoundTableProps): React.ReactElement => {
  console.log(roundData);
  return (
    <>
      <div>Hello World</div>
    </>
  );
};

export default RoundTable;
