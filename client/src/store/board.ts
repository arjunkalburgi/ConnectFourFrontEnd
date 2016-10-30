import { Action } from 'redux';

export interface BoardAction extends Action {
  type: string;
  payload: {
    column: number,
    player: 'user' | 'computer'
  };
};

type Board = Array<Array<'user' | 'computer'>>;
const DEFAULT_BOARD = Array(7).fill([]);

const MAKE_MOVE = 'MAKE_MOVE';
const CLEAR_BOARD = 'CLEAR_BOARD';

const makeMove = (state: Board, action: BoardAction) => {
  let newBoard = [
    ...state
  ];
  newBoard[action.payload.column].push(action.payload.player);
  return newBoard;
};

export const board = (state: Board = DEFAULT_BOARD, action: BoardAction) => {
  switch (action.type) {
    case MAKE_MOVE:
      return makeMove(state, action);
    case CLEAR_BOARD:
      return DEFAULT_BOARD;
    default:
      return state;
  }
};
