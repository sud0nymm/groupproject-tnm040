import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
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



function StartPage() {
  
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);      
  }

  return (
    <>
      <div className='sliding-background'>
        <Link to="/takeorder"> <button className='button'></button></Link>
        <button id='close-button' onClick={togglePopup} >X</button>
        {showPopup &&(
          <>
            <div className ='pop1'>
              <div className='pop2'>
              
                <h2>Bearista <button onClick={togglePopup} className='pop3'>X</button></h2>
                <p>Bearista is a coffee making game where an order is placed and it is your job to make it as similar as possible</p>
              </div>
            </div>
          </>
      )}
      <button className='image-button' onClick={togglePopup}></button>
      </div>
    </>
  )
}


export default App
