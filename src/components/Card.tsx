import * as React from 'react';
import { Col } from 'antd';
import styled from '@emotion/styled';
export interface CardProps {
  id: string;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <CardWrap>
      <Title>{props.title}</Title>
    </CardWrap>
  );
}

const CardWrap = styled(Col)`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  cursor: pointer;
  margin-bottom: 8px;
  text-decoration: none;
  z-index: 0;
`;
const Title = styled.div`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
`;
