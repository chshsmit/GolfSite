/**
 * PreviousRoundCardCollapse.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-20T11:13:59.721Z-07:00
 * @copyright
 * @last-modified 2020-09-20T12:41:28.609Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";

import { Collapse, CardContent } from "@material-ui/core";

import { RoundCategoryNumberData } from "types/ApiResponseTypes";

import PreviousRoundCardTable from "components/PreviousRoundCard/PreviousRoundCardTable";

//---------------------------------------------------------------------------------------------------

interface PreviousRoundCardCollapseProps {
  expanded: boolean;
  strokesInfo: RoundCategoryNumberData;
  parInfo: RoundCategoryNumberData;
}

//---------------------------------------------------------------------------------------------------

const PreviousRoundCardCollapse = ({
  expanded,
  strokesInfo,
  parInfo,
}: PreviousRoundCardCollapseProps): React.ReactElement => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <PreviousRoundCardTable strokesInfo={strokesInfo} parInfo={parInfo} />
      </CardContent>
    </Collapse>
  );
};

export default PreviousRoundCardCollapse;
