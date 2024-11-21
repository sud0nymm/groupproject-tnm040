import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, useParams , Link} from 'react-router-dom';

import Play from './components/Play.jsx';
import RatingPage from './components/RatingPage.jsx';
import Play_milk from './components/Play_milk.jsx';



function App() {
  return (
    
    
    <BrowserRouter>
          
        <Routes>
          
          <Route path="" element={ <StartPage /> }  /> {/* START PAGE */}
        
          <Route path="/playmilk" element={<Play_milk />} />  {/* TAKE ORDER PAGE */}

          <Route path="/play" element={<Play />} />  {/* TAKE ORDER PAGE */}

          <Route path="/ratingpage/:id" element={<RatingPage />} /> { /* ROUTING PAGE, ID IS THE SCORE*/ }
        </Routes>
      
    </BrowserRouter>

  );
}

function StartPage(){

  return (
    <div>   
    <Link to="/play"> Play</Link>

    <>
    <div className="mugg">
    <button className="button-play"></button>
    </div>
    </>

    </div>
    

  )

}


export default App
