import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from '../components/Board';
import CardList from '../components/CardList';
import TaskList from '../components/TaskList';
import styled from '@emotion/styled';
import { Layout } from 'antd';
const { Content } = Layout;
export default function ContentContainer() {
  return (
    <ContentWrap>
      <Switch>
        <Route path="/" exact component={Board} />
        <Route path="/home" component={Board} />
        <Route path="/list" component={TaskList} />
        <Route path="/recent" component={CardList} />
      </Switch>
    </ContentWrap>
  );
}

const ContentWrap = styled(Content)`
  padding: 1rem;
  overflow-y: auto;
`;
