import { createAction, handleActions } from 'redux-actions';

const CREATE_CARD = 'task/CREATE_CARD' as const;
const DELETE_CARD = 'task/DELETE_CARD' as const;

export const createCard = createAction(CREATE_CARD);
export const deleteCard = createAction(DELETE_CARD);
const newDate = new Date();
const initialState = {
  id: 'test',
  cards: [{ id: 'card1', title: 'sample1', createdTime: newDate.toString() }],
};
const reducer = handleActions(
  {
    [CREATE_CARD]: (state: any, action: any) => {
      return state;
    },
    [DELETE_CARD]: (state: any, action: any) => {
      return state;
    },
  },
  initialState,
);

export default reducer;
