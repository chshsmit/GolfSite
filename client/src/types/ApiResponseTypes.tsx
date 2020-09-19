/**
 * ApiResponseTypes.tsx
 * @author Christopher Smith
 * @description Types from API responses
 * @created 2020-09-19T10:59:48.624Z-07:00
 * @last-modified 2020-09-19T11:10:45.009Z-07:00
 */

export interface BaseRound {
  course: string;
  date: string;
  par: number;
  score: number;
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
