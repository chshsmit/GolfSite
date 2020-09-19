/**
 * ApiResponseTypes.tsx
 * @author Christopher Smith
 * @description Types from API responses
 * @created 2020-09-19T10:59:48.624Z-07:00
 * @last-modified 2020-09-19T11:00:16.190Z-07:00
 */

export interface BaseRound {
  Course: string;
  Date: string;
  Par: number;
  Score: number;
}

export interface HandicapReponseObject {
  handicapDifferential: number;
  totalRounds: number;
}

export interface PuttingResponseObject {
  averagePuttsPerHole: number;
  totalHoles: number;
  totalPutts: number;
}

export interface HomepageDataResponse {
  handicap: HandicapReponseObject;
  lastThree: Array<BaseRound>;
  putting: PuttingResponseObject;
}
