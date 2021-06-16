import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Layout} from 'antd';
import ContentContainer from './containers/ContentContainer';
import SiderLeftContainer from './containers/SiderLeftContainer';
import SiderRightContainer from './containers/SiderRightContainer';
function App() {
  return (
    <BrowserRouter>
    <Layout >
      <SiderLeftContainer/>
      <ContentContainer/>
      <SiderRightContainer/>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
