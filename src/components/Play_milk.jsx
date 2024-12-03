import { useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

let stars = 0;

function Play_milk() {

    return (
        <div> 
            <img src="../public/cloud.png" alt="Cloud" className="cloud11" />
            <img src="../public/cloud.png" alt="Cloud" className="cloud22" />
            <img src="../public/cloud.png" alt="Cloud" className="cloud33" />
            <ThreeBoxes/> 
        </div>

    )
}

function ThreeBoxes(){
  const [isAnimating, setIsAnimating] = useState(false);

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
              <Holdable_box className="milk-button" imgsrc= {"Cow-btn.svg"} onStart={handleStartAnimation} onStop={handleStopAnimation}/>
              <Holdable_box className="milk-button" imgsrc= {"Almond-btn.svg"} onStart={handleStartAnimation} onStop={handleStopAnimation}/>
              <Holdable_box className="milk-button" imgsrc= {"Coco-btn.svg"} onStart={handleStartAnimation} onStop={handleStopAnimation}/>
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

function Holdable_box({imgsrc, onStart, onStop}) {

    const [isHolding, setIsHolding] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const navigate = useNavigate();

    const isHoldingRef = useRef(false);

    useEffect(() => { 
        
        hasClicked == true;
        return;
    },[isHolding, hasClicked] )

    const handleMouseDown = () => {
        ratingsystem(imgsrc);
        setHasClicked(true);
        setIsHolding(true); // start holding
        if (onStart) onStart();
        //console.log("holding...");
        isHoldingRef.current = true;

    };
    
    const handleMouseUp = () => { // release holding
        setIsHolding(false);
        if (onStop) onStop();
        isHoldingRef.current = false;
        setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url
            
            if(!isHoldingRef.current){
                console.log("delay over");
                //navigate(`/playcoffee/${ratingsystem()}`);
                // go to Play COFFEE NEXT!!
            } else {
                console.log("button held")
            }

        }, 2000);

    };

    return (
        <div className='milk-button-pour-box'
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp}
            > {/* handles holding on the div */}

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

function ratingsystem(imgsrc){
    let staramount = 2; // change to do shit blehhhh
    console.log(imgsrc);

    return staramount;
}

export default Play_milk;
