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

    return (
        <div className='container'>
          <div className='milk-machine'>
            <div className='milk-buttons-box'>
              <Holdable_box className="milk-button" imgsrc= {"/Cow-btn.svg"} stars = {stars}/>
              <Holdable_box className="milk-button" imgsrc= {"/Almond-btn.svg"} stars = {stars}/>
              <Holdable_box className="milk-button" imgsrc= {"/Coco-btn.svg"} stars = {stars}/>
            </div>
            <div className='milkmug'>
              <div className='fillAnimationContainer'>
                <div className='fillAnimation'>

                </div>
              </div> 
            </div>
          </div>
        </div>
    )
    
}

function Holdable_box({imgsrc, stars}) {

    stars = parseInt(stars.id)
    console.log(parseInt(stars));


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
        //console.log("holding...");
        isHoldingRef.current = true;

    };
    
    const handleMouseUp = () => { // release holding
        setIsHolding(false);
        isHoldingRef.current = false;
        setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url
            
            if(!isHoldingRef.current){
                console.log("delay over");
                console.log(imgsrc)
                navigate(`/serving/${ratingsystem(imgsrc, stars)}`);
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

            <div className='pourAnimationContainer'> 
                {isHolding && (
                <img className='animationBox'
                    src="cat.gif" // This could be any image
                    alt="Held Image"
                />
            )} 
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
