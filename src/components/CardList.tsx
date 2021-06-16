import * as React from 'react';
import { Row } from 'antd';
import styled from '@emotion/styled';
import Card, { CardProps } from './Card';
import { connect } from 'react-redux';
export interface CardListProps {
  task: any;
}

function CardList(props: CardListProps) {
  return (
    <ListWrap>
      {props.task.cards.map((card: CardProps, index: number) => (
        <Card key={`${card.id}${index}`} {...card} />
      ))}
    </ListWrap>
  );
}

const ListWrap = styled(Row)`
  background-color: #ebecf0;
  border-radius: 3px;
`;
const mapStateToProps = ({ task }: { task: any }) => ({ task });
export default connect(mapStateToProps)(CardList);
