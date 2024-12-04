import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { BrowserRouter, Routes, Route, useParams, Link, useNavigate } from 'react-router-dom';
import Serving from './components/Serving.jsx';
import RatingPage from './components/RatingPage.jsx';
import Play_milk from './components/Play_milk.jsx';
import Play_coffe from './components/Play_coffee.jsx';



function App() {
  return (


    <BrowserRouter>
          
        <Routes>
          
          <Route path="" element={ <StartPage /> }  /> {/* START PAGE */}
        
          <Route path="/playmilk/:id" element={<Play_milk />} />  {/* Play milk */}

          <Route path="/playcoffee" element={<Play_coffe />} />  {/* PLay coffee */}

          <Route path="/serving/:id" element={<Serving />} />  {/* Serving page (change name?) */}

          <Route path="/ratingpage/:id" element={<RatingPage />} /> { /* ROUTING PAGE, ID IS THE SCORE*/ }
        </Routes>
      
    </BrowserRouter>

  );
}



function StartPage() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // För programmatisk navigering

  const handleLinkClick = (event) => {

    // Starta animationen
    setIsAnimating(true);

    // Navigera till "/play" efter animationen är klar (4 sekunder)
    setTimeout(() => {
      navigate("/playcoffee"); // Programmatisk navigering
    }, 2000); // Matchar animationens längd
  };
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);      
  }

  return (
    <>
      <div className='sliding-background'>
        {}
      <img src="../public/cloud.png" alt="Cloud" className={`cloud1 ${isAnimating ? 'animate' : ''}`} />
      <img src="../public/cloud.png" alt="Cloud" className={`cloud2 ${isAnimating ? 'animate' : ''}`} />
      <img src="../public/cloud.png" alt="Cloud" className={`cloud3 ${isAnimating ? 'animate' : ''}`} />
      <Link onClick={handleLinkClick}>
        <button className="button"></button>
      </Link>
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
