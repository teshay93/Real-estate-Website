import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Nav = styled.nav`
height: 60px;
background: red;
`;

function App() {
  return (
   <>
   <Navbar/>
   </>
  );
}

export default App;
