/**
 * ApiResponseInterfaces.tsx
 * @author Christopher Smith
 * @description All interfaces for API Responses
 * @created 2020-09-18T23:05:21.104Z-07:00
 * @last-modified 2020-09-19T10:54:41.242Z-07:00
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
