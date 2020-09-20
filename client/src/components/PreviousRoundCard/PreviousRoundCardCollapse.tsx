/**
 * PreviousRoundCardCollapse.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-20T11:13:59.721Z-07:00
 * @copyright
 * @last-modified 2020-09-20T11:17:00.683Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";

import { Collapse, CardContent, Typography } from "@material-ui/core";

import { RoundCategoryNumberData } from "types/ApiResponseTypes";

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
        <Typography paragraph>Here is an example</Typography>
      </CardContent>
    </Collapse>
  );
};

export default PreviousRoundCardCollapse;
