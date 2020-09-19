/**
 * ApiResponseInterfaces.tsx
 * @author Christopher Smith
 * @description All interfaces for API Responses
 * @created 2020-09-18T23:05:21.104Z-07:00
 * @last-modified 2020-09-18T23:07:51.704Z-07:00
 */

interface BaseRound {
  Course: string;
  Date: string;
  Par: number;
  Score: number;
}

export interface HomepageDataResponse {
  handicap: {
    handicapDifferential: number;
    totalRounds: number;
  };

  lastThree: Array<BaseRound>;
  putting: {
    averagePuttsPerHole: number;
    totalHoles: number;
    totalPutts: number;
  };
}
