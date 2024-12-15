import { useState } from 'react'
import React from 'react';
import './componentStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

function Play_milk() {

    const stars = useParams();

    return (
        <div> 
            <ThreeBoxes stars = {stars}/> 
            
        </div>

    )
}


function ThreeBoxes({stars}){
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true);
  }

  const handleStopAnimation = () => {
    setIsAnimating(false);
  }

    return (
        <div className='container'>
          <div className={`goalBoxTemp ${isAnimating2 ? 'goalBoxTempA' : ''}`}/> 
          <div className={`fullTemp ${isAnimating2 ? 'fullTempA' : ''}`}>
          <img src="/mugg.png" alt="" className='mugTemp'/>
            <div className='orderbox2Temp' />
            <div className='desertshelfTemp'>
              <img src="/Kanelbulle.svg" alt="" />
              <img src="/Kladdkaka.svg" alt="" />
              <img src="/Muffin.svg" alt="" />
              <img src="/Cookie.svg" alt="" />
            </div>
          </div>
          <div className={`orderbox ${isAnimating2 ? 's5' : ''}`}/>
          <img src="../cafe.png" alt="" className={`cafeb2 ${isAnimating2 ? 's3' : ''}`} />
          <div className={`milk-machine ${isAnimating2 ? 's4' : ''}`}>
          
            <div className='milk-buttons-box'>
              <Holdable_box className="milk-button" imgsrc= {"/Cow.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} hasClicked={hasClicked} setHasClicked={setHasClicked} setIsAnimating2={setIsAnimating2}/>
              <Holdable_box className="milk-button" imgsrc= {"/Almond.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} hasClicked={hasClicked} setHasClicked={setHasClicked} setIsAnimating2={setIsAnimating2}/>
              <Holdable_box className="milk-button" imgsrc= {"/Coco.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} hasClicked={hasClicked} setHasClicked={setHasClicked} setIsAnimating2={setIsAnimating2}/>
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

function Holdable_box({imgsrc, onStart, onStop, stars, hasClicked, setHasClicked, setIsAnimating2}) {

    stars = parseInt(stars.id)

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
                
          setIsAnimating2(true);
              setTimeout(() => {
                  navigate(`/serving/${ratingsystem(imgsrc, theStars, hasClicked, setHasClicked)}`);
                }, 3000);
          }, 2000);


        setHasClicked(true);
    };

    return (
        <div className='milk-button-pour-box'
          onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} 
            style={{ pointerEvents: hasClicked ? 'none' : 'auto' }}> 

            <div className={`milk-button ${isHolding ? 'buttonPressAnim' : ''}`}>
                <img
                    src={imgsrc} 
                    alt = "Holdable Item"
                    style={{ pointerEvents: 'none' }}
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
  }
    
    return staramount;
}

export default Play_milk;
