export type NumberType = 'p' | 'f' | 'e' | 'r';

export type WindowState = {
  windowPrevState: number[];
  windowCurrState: number[];
  numbers: number[];
  avg: number;
};

export type Theme = 'light' | 'dark';