/**
 * ApiResponseTypes.tsx
 * @author Christopher Smith
 * @description Types from API responses
 * @created 2020-09-19T10:59:48.624Z-07:00
 * @last-modified 2020-09-20T11:49:32.044Z-07:00
 */

//-------------------------------------------------

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

//-------------------------------------------------

export interface RoundCategoryNumberData {
  [hole1: string]: number;
  hole10: number;
  hole11: number;
  hole12: number;
  hole13: number;
  hole14: number;
  hole15: number;
  hole16: number;
  hole17: number;
  hole18: number;
  hole2: number;
  hole3: number;
  hole4: number;
  hole5: number;
  hole6: number;
  hole7: number;
  hole8: number;
  hole9: number;
  in: number;
  out: number;
  total: number;
}
export interface RoundCategoryStringData {
  hole1: number;
  hole10: number;
  hole11: number;
  hole12: number;
  hole13: number;
  hole14: number;
  hole15: number;
  hole16: number;
  hole17: number;
  hole18: number;
  hole2: number;
  hole3: number;
  hole4: number;
  hole5: number;
  hole6: number;
  hole7: number;
  hole8: number;
  hole9: number;
  in: number;
  out: number;
  total: number;
}

export interface SingleRoundData {
  course: string;
  date: string;
  gir: RoundCategoryStringData;
  overUnder: RoundCategoryNumberData;
  par: RoundCategoryNumberData;
  penalties: RoundCategoryNumberData;
  putts: RoundCategoryNumberData;
  strokes: RoundCategoryNumberData;
}
