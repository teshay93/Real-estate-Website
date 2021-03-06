import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';
import DropMenu from './components/DropMenu';
import Content from './components/Content';
import { InfoData } from './data/InfoData';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
   <GlobalStyle />
   <Navbar toggle={toggle}/>
   <DropMenu isOpen={isOpen} toggle={toggle}/>
   <Slider slides={SliderData} />
   <Content {...InfoData}/>
   </>
  );
}

export default App;
