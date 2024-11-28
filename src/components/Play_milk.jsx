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

    return (
        //"Beacon_JE6_BE2.png"
        <div className='container'>
          <div className='milk-machine'>
            <div className='milk-buttons-box'>
              <Holdable_box className="milk-button" imgsrc= {"Cow-btn.svg"}/>
              <Holdable_box className="milk-button" imgsrc= {"Almond-btn.svg"}/>
              <Holdable_box className="milk-button" imgsrc= {"Coco-btn.svg"}/>
            </div>
          </div>
        </div>
    )
    
}

function Holdable_box({imgsrc}) {

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
        //console.log("holding...");
        isHoldingRef.current = true;

    };
    
    const handleMouseUp = () => { // release holding
        setIsHolding(false);
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp}
            > {/* handles holding on the div */}

            <div className="milk-button">
                <img
                    src={imgsrc} 
                    alt = "Holdable Item"
                />
            </div>

            <div> 
                {isHolding && (
                <img className='animationBox'
                    src="cat.gif" // This could be any image
                    alt="Held Image"
                />
            )} </div>
            

        </div>
    )
}

function ratingsystem(imgsrc){
    let staramount = 2; // change to do shit blehhhh
    console.log(imgsrc);

    return staramount;
}

export default Play_milk;
