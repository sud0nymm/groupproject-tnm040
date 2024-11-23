import { useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// INFO for some reason in this file a " / " is required before the images, or else they don't load (?????)

/* coffee animation is supposed to be a button press, 
a dynamic wait time depending on the amount of coffe (make a volume of coffee bar later) and
then a fixed wait after the end of animation, then reroute to serving  */

function Play_coffe() {
    
    //useparams must be here
    const { id } = useParams();
    const staramount = id; 

    return (
        <div> 
            <ThreeBoxes stars= { staramount }/>
        </div>

    )
}

function ThreeBoxes({stars}){ // star amountfrom link

    //console.log(stars)

    return (
        //"Beacon_JE6_BE2.png"          // CHANGE THE IMAGES FOR THIS ONE!!!!!! to beans
        <div className='container'>
          <div className='milk-machine'>
            <div className='milk-buttons-box'>
              <Pressable_box className="milk-button" imgsrc= {"/Beacon_JE6_BE2.png"}/>
              <Pressable_box className="milk-button" imgsrc= {"/Beacon_JE6_BE2.png"}/>
              <Pressable_box className="milk-button" imgsrc= {"/Beacon_JE6_BE2.png"}/>
            </div>
          </div>
        </div>
    )
    
}

function Pressable_box ({imgsrc, currentstars}) {

    const [hasPressed, setHasPressed] = useState(false);

    const handlePress = () => { // IS SUPPOSED TO HAVE A DELAY THEN REROUTE TO SERVING

        if (hasPressed == true) return; // returns so that you can't press other buttons after pressing one once
        // make the animation on a timer since coffee isn't a hold game, but jsut press
        // after timer go to serving.jsx

        setHasPressed(true);
        ratingsystem(imgsrc, currentstars); // can also reroute here
        
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={handlePress} onTouchStart={handlePress}
            > {/* handles holding on the div */}

            <div className="milk-button">
                <img
                    src={imgsrc} 
                    alt = "coffee bean"
                    width= "70px" //widht and height?
                />
            </div>

            <div> 
            {hasPressed && ( 
                <img className='animationBox'
                    src="/cat.gif" // This could be any image
                    alt="Held Image" 
                />
            )} </div>
            

        </div>
    )
}

function ratingsystem(imgsrc, currentstars){ // rating system rates user, then send them to the serving.jsx


    //console.log(currentstars);
    //console.log(imgsrc);

    setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url
            
        console.log("after press?")

    }, 2000);


}

export default Play_coffe;