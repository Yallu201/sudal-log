import { createAction, handleActions } from 'redux-actions';

const CREATE_LIST = 'board/CREATE_LIST' as const;
const DELETE_LIST = 'board/DELETE_LIST' as const;

export const createList = createAction(CREATE_LIST);
export const deleteList = createAction(DELETE_LIST);
const initialState = {
  id: 'board1',
  tasks: [
    { id: 'task1', title: '고등학교 친구들과 부산여행', createdTime: new Date() },
    { id: 'task', title: '일산 VLOG 촬영일정', createdTime: new Date('2021-06-15') },
    { id: 'task', title: '여우와 과일에 관한 이야기 정독', createdTime: new Date('2021-06-01') },
    {
      id: 'task',
      title:
        '내가 너무 할 말이 많아서 말이지 이 이야기는 언제 끝날지는 모르겠지만 지금부터 생각해보자면 이렇게 될것 같단 말이지',
      createdTime: new Date('2021-05-11'),
    },
    { id: 'task', title: 'task', createdTime: new Date('2021-03-11') },
    { id: 'task', title: 'task', createdTime: new Date('2020-01-11') },
  ],
};
const reducer = handleActions(
  {
    [CREATE_LIST]: (state: any, action: any) => {
      return state;
    },
    [DELETE_LIST]: (state: any, action: any) => {
      return state;
    },
  },
  initialState,
);

export default reducer;
