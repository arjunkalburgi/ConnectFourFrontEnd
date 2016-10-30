import { createStore, combineReducers } from 'redux'
import { turn, board, Board, difficulty, Difficulty} from './store';
interface State {
  turn: 'user'|'computer';
  board: Board;
  difficulty: Difficulty;
}
export let store = createStore<State>(combineReducers<State>({
  turn,
  board,
  difficulty
}));
