import { Action } from 'redux';

export interface DifficultyAction extends Action {
  type: string;
  payload: Difficulty;
}

export enum Difficulty {
  EASY,
  MEDIUM,
  HARD
}

export const SET_DIFFICULTY = 'SET_DIFFICULTY';

export const difficulty = (state: Difficulty.EASY, action: DifficultyAction) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return action.payload;
    default:
      return state;
  }
};
