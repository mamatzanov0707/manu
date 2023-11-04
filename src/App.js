import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Block from "./Block/Block";
import Menu from './page/Menu/Menu';

import Desserts from "./page/Desserts/Desserts";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path={'/'} element={<Block/>}/>
          <Route path={"/menu"} element={<Menu/>}/>

          <Route path={'/desserts'} element={<Desserts/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
