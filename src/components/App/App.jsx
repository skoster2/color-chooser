import {Choose} from '../Choose/Choose';
import {Collections} from '../Collections/Collections';
import {FindMeColors} from '../FindMeColors/FindMeColors';
import {Home} from '../Home/Home';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Header} from '../Header/Header'
import React from "react";
import {useState} from "react";

/* export const color1 = React.createContext();
export const color2 = React.createContext();
export const mainColor = React.createContext();
export const collections = React.createContext();
 */

export const myContext = React.createContext();

function App(){
  const [color1, setColor1] = useState("#00bfff");
  const [color2, setColor2] = useState("#75bfff");
  const [mainColor, setMainColor] = useState();
  const [foundColors, setFoundColors] = useState([]);
  const [collections, setCollections] = useState([]);
  

  return(
    

    <div className='App'>
      <myContext.Provider value = {{color1, setColor1, color2, setColor2, mainColor, setMainColor, collections, setCollections, foundColors, setFoundColors}}>
  <HashRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/choose" element={<Choose/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/findmecolors" element={<FindMeColors/>}/>
      </Routes>
    </HashRouter>
    </myContext.Provider>
    </div>
  )
}

export default App;
