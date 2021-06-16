import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
export interface TaskProps {
  id: string;
  title: string;
  createdTime: Date;
}

export default function Task(props: TaskProps) {
  const history = useHistory();
  //   const onClick = () => {};
  // const onClick=()=>history.push(`/recent/${props.id}`);

  return (
    <TaskWrap>
      <Title>{props.title}</Title>
      <DiffTime>{getDiffTime(props.createdTime)}</DiffTime>
    </TaskWrap>
  );
}
function getDiffTime(date: Date) {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const now = new Date();

  const yearNow = now.getFullYear();
  const yearTick = date.getFullYear();
  const yearDiff = yearNow - yearTick;
  if (yearDiff) return `${yearDiff}년 전`;

  const monthNow = now.getMonth();
  const monthTick = date.getMonth();
  const monthDiff = monthNow - monthTick;
  if (monthDiff) return `${monthDiff}개월 전`;

  const dayNow = now.getDate();
  const dayTick = date.getDate();
  const dayDiff = dayNow - dayTick;
  if (dayDiff) return `${dayDiff}일 전`;

  const timeNow = now.getTime();
  const timeDate = date.getTime();
  const hourDiff = Math.floor((timeNow - timeDate) / HOUR);
  if (hourDiff) return `${hourDiff}시간 전`;

  const minuteDiff = Math.floor((timeNow - timeDate) / MINUTE);
  if (minuteDiff) return `${minuteDiff}분 전`;

  const secDiff = Math.floor((timeNow - timeDate) / SECOND);
  return `${secDiff}초 전`;
}
const TaskWrap = styled.div`
  padding: 1rem;
  height: 8rem;
  border-radius: 1rem;
  background-color: #ffffff;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;
const DiffTime = styled.div`
  font-size: 0.75rem;
  color: #7da2a9;
`;
