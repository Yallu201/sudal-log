import * as React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiPlusSm } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import { Row, Col } from 'antd';
import Task, { TaskProps } from './Task';
export interface TaskListProps {
  board: any;
}

function TaskList(props: TaskListProps) {
  return (
    <Row gutter={[16, 16]}>
      {props.board.tasks.map((task: TaskProps, index: number) => (
        <Col key={`${task.id}${index}`} xs={24} sm={24} md={24} lg={12} xl={8}>
          <Task {...task} />
        </Col>
      ))}
      <Col xs={24} sm={24} md={24} lg={12} xl={8}>
        <TaskAddButton onClick={() => console.log('TaskAddButton')}>Task+</TaskAddButton>
      </Col>
    </Row>
  );
}
const mapStateToProps = ({ board }: { board: any }) => ({ board });
export default connect(mapStateToProps)(TaskList);
const TaskAddButton = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  height: 8rem;
  border-radius: 1rem;
  background-color: #edeceb;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #7da2a9;
  }
  transition: 0.2s ease-in-out;
`;
