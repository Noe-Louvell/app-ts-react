import React from 'react';

import Header from './component/header'
import Body from './component/body'
import Footer from './component/footer'
import styled from 'styled-components'


const AppStyle = styled.div
`
  text-align: center;
`;

function App() {
  return (
    <AppStyle>
      
        <Header/>
        <Body/>
        <Footer/>
      
    </AppStyle>
  );
}

export default App;
