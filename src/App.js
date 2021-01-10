import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
   <>
   <GlobalStyle />
   <Navbar/>
   <Slider slides={SliderData} />
   </>
  );
}

export default App;
