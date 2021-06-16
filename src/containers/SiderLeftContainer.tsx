import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineClockCircle, AiOutlineBars } from 'react-icons/ai';
const { Sider } = Layout;
const [DASH_BOARD, LIST, RECENT] = [0, 1, 2];
const PATH_NAMES: string[] = ['home', 'list', 'recent'];
export default function SiderLeftContainer() {
  const location = useLocation();
  const [selected, setSelected] = useState([false, false, false]);
  useEffect(() => {
    const nextState: boolean[] = PATH_NAMES.map(path => location.pathname.includes(path));
    console.log('test');
    setSelected(nextState);
  }, [location]);
  return (
    <Sider theme="light">
      <Link to="/">
        <Logo>Sudal Log</Logo>
      </Link>
      <Link to="/home">
        <Menu selected={selected[DASH_BOARD]}>
          <HomeIcon />
          Home
        </Menu>
      </Link>
      <Link to="/list">
        <Menu selected={selected[LIST]}>
          <ListIcon />
          List
        </Menu>
      </Link>
      <Link to="/recent">
        <Menu selected={selected[RECENT]}>
          <RecentTaskIcon />
          Recent
        </Menu>
      </Link>
    </Sider>
  );
}
const ListIcon = styled(AiOutlineBars)`
  margin-bottom: -0.125rem;
  margin-right: 0.5rem;
`;
const RecentTaskIcon = styled(AiOutlineClockCircle)`
  margin-bottom: -0.125rem;
  margin-right: 0.5rem;
`;
const HomeIcon = styled(AiOutlineHome)`
  margin-bottom: -0.125rem;
  margin-right: 0.5rem;
`;
const Logo = styled.div`
  margin-left: 1.25rem;
  margin-top: 3rem;
  margin-bottom: 9rem;
  font-size: 2rem;
  font-weight: 700;
  color: #7da2a9;
`;
const Menu = styled.div<MenuProps>`
  line-height: 1.125rem;
  font-size: 1.125rem;
  font-weight: 500;
  margin-left: 1.25rem;
  margin-bottom: 3rem;
  border-right-width: 0.375rem;
  border-right-style: solid;
  border-right-color: ${props => (props.selected ? '#7DA2A9' : 'transparent')};
  transition: 0.4s ease-in-out;
`;

interface MenuProps {
  selected?: boolean;
}
