import * as React from 'react';
import styled from '@emotion/styled';
import List, { CardListProps } from './CardList';
export interface IAppProps {
  listArray?: CardListProps[];
}
const myListArray = [
  {
    id: 'myList1',
    list: [{ id: 'id1', title: 'title1', description: 'desc1' }],
  },
  {
    id: 'myList2',
    list: [{ id: 'id2', title: 'title2', description: 'desc2' }],
  },
  {
    id: 'myList3',
    list: [{ id: 'id3', title: 'title3', description: 'desc3' }],
  },
];
export default function Board(props: IAppProps) {
  return (
    <BoardStyled>
      {myListArray.map((list, index) => (
        <List key={`${list.id}${index}`} {...list} />
      ))}
    </BoardStyled>
  );
}

const BoardStyled = styled.div`
  /* -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
    margin-bottom: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
`;
