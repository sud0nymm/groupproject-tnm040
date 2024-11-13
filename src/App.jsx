import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import TakeOrder from './components/TakeOrder.jsx';
import FreePlay from './components/FreePlay.jsx';
import RatingPage from './components/RatingPage.jsx';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';


function App() {
  return (


    <BrowserRouter>

      <Routes>

        <Route path="" element={<StartPage />} /> {/* START PAGE */}

        <Route path="/freeplay" element={<FreePlay />} />  {/* FREE PLAY PAGE */}

        <Route path="/takeorder" element={<TakeOrder />} />  {/* TAKE ORDER PAGE */}

        <Route path="/ratingpage" element={<RatingPage />} />  {/* RATING PAGE */}

      </Routes>

    </BrowserRouter>

  );
}

function StartPage() {

  return (
<<<<<<< Updated upstream
    <div>   
      <div className='container'>
        <div className='sliding-background'> 

        </div>
      </div>
      
      <Link to="/freeplay">Free Play</Link> { /*make pretty pretty please*/ }
      <br/>
      <Link to="/takeorder">Take Play</Link>

      <div className="mugg">
        <button className="button-play"></button>
      </div>
    </div>
=======
    <>
      

      <Link to="/freeplay" className="container">Free Play</Link> { /*make pretty pretty please*/}

      
      { /*Knappen för "take order", välj om det ska vara playknappen, texten eller båda som ska vara klickbara*/}


          <Link to="/takeorder" className="button-play"></Link>


      { /*Ta bort knapp och text och ha endast drick*/}
    </>


>>>>>>> Stashed changes
  )

}


export default App
