import LoadingBar from 'react-top-loading-bar'
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter, Routes,Route} from "react-router-dom";
const App=()=>{
  const [progress, setProgress] = useState(0);

  const changeProgress=(progress)=>
  {
    setProgress(progress);
  }
  const apiKey=process.env.REACT_APP_NEWS_API;
    return(
    <BrowserRouter>
    <NavBar/>
    <LoadingBar
        color='#03d366'
        progress={progress}
        height='4px'
      />
    <Routes>
      <Route exact path="/" element={<News apiKey={apiKey} changeProgress={changeProgress} key="general" pageSize={9} country="in" category="news" />}/>
      <Route exact path="/business" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Business" pageSize={9} country="in" category="business"/>}/>
        <Route exact path="/science" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Science" pageSize={9} country="in" category="science"/>}/>
        <Route exact path="/sport" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Sports" pageSize={9} country="in" category="sport"/>}/>
        <Route exact path="/entertainment" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Entertainment" pageSize={9} country="in" category="entertainment" />}/>
        <Route exact path="/food" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Health" pageSize={9} country="in" category="food"/>}/>
        <Route exact path="/tech" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Technology" pageSize={9}country="in" category="tech"/>}/>
    </Routes>
    </BrowserRouter>
  )
  }
  export default App