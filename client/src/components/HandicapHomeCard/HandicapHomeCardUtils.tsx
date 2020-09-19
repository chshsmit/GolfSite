/**
 * HandicapHomeCardUtils.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-19T10:11:16.552Z-07:00
 * @copyright
 * @last-modified 2020-09-19T10:21:01.605Z-07:00
 */

import { makeStyles } from "@material-ui/core/styles";

export interface HandicapHomeCardProps {
  handicapDifferential: number;
  totalRounds: number;
}

export const handicapCardStyles = makeStyles({
  root: {
    maxWidth: 275,
    minHeight: 175,
  },
});
