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
            <ThreeBoxes stars = {stars}/> 
        </div>

    )
}


function ThreeBoxes({stars}){
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimating2, setIsAnimating2] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true);
  }

  const handleStopAnimation = () => {
    setIsAnimating(false);
  }

    return (
        <div className='container'>
          <img src="../cafe.png" alt="" className={`cafeb2 ${isAnimating2 ? 's3' : ''}`} />
          <div className={`milk-machine ${isAnimating2 ? 's4' : ''}`}>
            <div className='milk-buttons-box'>
              <Holdable_box className="milk-button" imgsrc= {"/Cow-btn.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} setIsAnimating2={setIsAnimating2}/>
              <Holdable_box className="milk-button" imgsrc= {"/Almond-btn.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} setIsAnimating2={setIsAnimating2}/>
              <Holdable_box className="milk-button" imgsrc= {"/Coco-btn.svg"} stars = {stars} onStart={handleStartAnimation} onStop={handleStopAnimation} setIsAnimating2={setIsAnimating2}/>
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

function Holdable_box({imgsrc, onStart, onStop, stars, setIsAnimating2}) {

    stars = parseInt(stars.id)
    console.log(stars);

    const [isHolding, setIsHolding] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const navigate = useNavigate();

    const isHoldingRef = useRef(false);

    useEffect(() => { 
        
        hasClicked == true;
        return;
    },[isHolding, hasClicked] )

    const handleMouseDown = () => {
        ratingsystem(imgsrc, stars);
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
                setIsAnimating2(true);
                setTimeout(()=> {
                    navigate(`/serving/${ratingsystem(imgsrc, stars)}`);
                }, 3000)
                // go to Play COFFEE NEXT!!
            } else {
                console.log("button held")
            }

        }, 2000);

    };

    return (
        <div className='milk-button-pour-box'
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} /* onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} Triggrar navigate till serving om man hoverar */
            > {/* handles holding on the div */}

            <div className={`milk-button ${isHolding ? 'buttonPressAnim' : ''}`}>
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

    console.log(staramount);


    if (imgsrc == "/Cow-btn.svg"){
        console.log("here");
        staramount += 1;
        console.log(staramount);
    } else {
        console.log("but but here")
        staramount += 0;
        console.log(staramount);

    }

    return staramount;
}

export default Play_milk;
