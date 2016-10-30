import { Action } from 'redux';

export interface TurnAction extends Action {
  type: string;
  payload: 'user' | 'computer';
}

export const TURN = 'TURN';

export const turn = (state = 'user', action: TurnAction) => {
  switch (action.type) {
    case TURN:
      return action.payload
    default:
      return state;
  }
};
