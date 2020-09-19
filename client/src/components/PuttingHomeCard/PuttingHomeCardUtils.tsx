/**
 * PuttingHomeCardUtils.tsx
 * @author Christopher Smith
 * @description Interface and styles for Putting Home Card
 * @created 2020-09-18T23:02:18.097Z-07:00
 * @last-modified 2020-09-18T23:14:04.452Z-07:00
 */

import { makeStyles } from "@material-ui/core/styles";

export interface PuttingHomeCardProps {
  averagePuttsPerHole: number;
  totalHoles: number;
  totalPutts: number;
}

export const puttingCardStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
});
