import { useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Play_milk() {

    const stars = useParams();

    return (
        <div> 
            <div className='orderbox'/>
            <ThreeBoxes stars = {stars}/> 
        </div>

    )
}


function ThreeBoxes({stars}){
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true);
  }

  const handleStopAnimation = () => {
    setIsAnimating(false);
  }

    return (
        <div className='container'>
          <div className='milk-machine'>
            <div className='milk-buttons-box'>
              <Holdable_box className="milk-button" imgsrc= {"/Cow.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} hasClicked={hasClicked} setHasClicked={setHasClicked}/>
              <Holdable_box className="milk-button" imgsrc= {"/Almond.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} hasClicked={hasClicked} setHasClicked={setHasClicked}/>
              <Holdable_box className="milk-button" imgsrc= {"/Coco.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} hasClicked={hasClicked} setHasClicked={setHasClicked}/>
            </div>
            <div className='milkmug'>
              <div className='fillAnimationContainer'>
                <Animated_Box isAnimating={isAnimating} />
              </div> 
            </div>
          </div>
        </div>
    )
    
}

function Animated_Box({isAnimating}) {
  return (
    <div className={`fillAnimationBox ${isAnimating ? 'fillAnimation' : 'fillAnimationPaused'}`}/>
  )
}

function Holdable_box({imgsrc, onStart, onStop, stars, hasClicked, setHasClicked}) {

    stars = parseInt(stars.id)
    console.log(stars);

    const [isHolding, setIsHolding] = useState(false);

    const navigate = useNavigate();

    const handleMouseDown = () => {
        ratingsystem(imgsrc, stars);
        setIsHolding(true); // start holding
        if (onStart) onStart();
    };
    
    const handleMouseUp = () => { // release holding
        setIsHolding(false);
        if (onStop) onStop();
        
        const theStars = stars;
        
        setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url
          console.log("delay over");
          console.log(imgsrc);

          navigate(`/serving/${ratingsystem(imgsrc, theStars, hasClicked, setHasClicked)}`);

        }, 2000);

        setHasClicked(true);
    };

    return (
        <div className='milk-button-pour-box'
          onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} 
            style={{ pointerEvents: hasClicked ? 'none' : 'auto' }}> 

            <div className="milk-button">
                <img
                    src={imgsrc} 
                    alt = "Holdable Item"
                />
            </div>

            <div className='pourAnimationContainer'> 
                <div className={`pourAnimationBox ${isHolding ? 'pourAnimation' : 'pourAnimationDrop'}`}/>
            </div>

        </div>
    )
}

function ratingsystem(imgsrc, staramount){
   
  if (imgsrc == "/Almond.svg") {
    staramount += 1;
    console.log(staramount);
  }

    
    return staramount;
}

export default Play_milk;
