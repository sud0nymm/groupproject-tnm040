import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import TakeOrder from './components/TakeOrder.jsx';
import FreePlay from './components/FreePlay.jsx';
import RatingPage from './components/RatingPage.jsx';
import { BrowserRouter, Routes, Route, useParams , Link} from 'react-router-dom';


function App() {
  return (
    
    
    <BrowserRouter>
          
        <Routes>
          
          <Route path="" element={ <StartPage /> }  /> {/* START PAGE */}
        
          <Route path="/freeplay" element={<FreePlay />} />  {/* FREE PLAY PAGE */}

          <Route path="/takeorder" element={<TakeOrder />} />  {/* TAKE ORDER PAGE */}

          <Route path="/ratingpage" element={<RatingPage />} />  {/* RATING PAGE */}

        </Routes>
      
    </BrowserRouter>

  );
}

function StartPage(){

  return (
    <div>   
      <div className='container'>
        <div className='sliding-background'/>
      </div>
      
      <Link to="/freeplay">Free Play</Link> { /*make pretty pretty please*/ }
      <br/>
      <Link to="/takeorder">Take Play</Link>

      <div className="mugg">
      <button className="button-play"></button>
      </div>
    </div>
  )

}


export default App
