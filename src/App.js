import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          {/*<Route path={'/'} element={}/>*/}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
