import { useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Play_coffe() {

    return (
        <div> 
            <ThreeBoxes/>
        </div>

    )
}

function ThreeBoxes(){

    ratingsystem();

    return (
        //"Beacon_JE6_BE2.png"          // CHANGE THE IMAGES FOR THIS ONE!!!!!!
        <div className='container'>
            <Holdable_box className="milk-button" imgsrc= {"Cow-btn.svg"}/> 
            <Holdable_box className="milk-button" imgsrc= {"Almond-btn.svg"}/>
            <Holdable_box className="milk-button" imgsrc= {"Coco-btn.svg"}/>
        </div>
    )
    
}

function Holdable_box({imgsrc}) {

    const [isHolding, setIsHolding] = useState(false);

    const handleMouseDown = () => { // IS SUPPOSED TO HAVE A DELAY THEN REROUTE TO SERVING

        ratingsystem(imgsrc); // can also reroute here
        setIsHolding(true); // start holding
        //console.log("holding...");

    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={handleMouseDown}
            > {/* handles holding on the div */}

            <div className="milk-button">
                <img
                    src={imgsrc} 
                    alt = "coffee bean"
                />
            </div>

            <div> 
                {isHolding && (
                <img className='animationBox'
                    src="cat.gif" // This could be any image
                    alt="Held Image"
                    alignItems="center"
                />
            )} </div>
            

        </div>
    )
}

function ratingsystem(imgsrc){

    const { id } = useParams();
    const staramount = id;
    console.log(staramount);// is the amount of stars the user got, sent in by the URL

    console.log(imgsrc);


}

export default Play_coffe;