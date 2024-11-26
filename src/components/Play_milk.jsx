import { useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Play_milk() {

    return (
        <div> 
            <Holdable_box imgsrc= {"Beacon_JE6_BE2.png"}/>

        </div>

    )
}

function ThreeBoxes(){

    return (
        
        <div className='container'>
            <Holdable_box imgsrc= {"Beacon_JE6_BE2.png"}/>
        </div>
    )
    
}

function Holdable_box({imgsrc}) {

    const [isHolding, setIsHolding] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const isHoldingRef = useRef(false);

    useEffect(() => { 
        
        hasClicked == true;
        return;
    },[isHolding, hasClicked] )

    const handleMouseDown = () => {
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
            } else {
                console.log("button held")
            }

        }, 2000);

    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} > {/* handles holding on the div */}

            <div className="testbox" style={{ padding: '10px', backgroundColor: 'lightblue', cursor: 'move' }}>
                <img
                    src={imgsrc} 
                    alt = "Holdable Item"
                    style={{ width: '200px', height: '200px' }}
                />
            </div>

            {isHolding && (
                <img
                    src="cat.gif" // This could be any image
                    alt="Held Image"
                    style={{
                        width: '200px',
                        height: '200px',
                        pointerEvents: 'none', // Prevent interaction with this image
                    }}
                />
            )}

        </div>
    )
}

export default Play_milk;