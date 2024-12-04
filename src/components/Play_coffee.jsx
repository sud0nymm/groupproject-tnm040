import { useRef, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable';


// INFO for some reason in this file a " / " is required before the images, or else they don't load (?????)

/* coffee animation is supposed to be a button press, 
a dynamic wait time depending on the amount of coffe (make a volume of coffee bar later) and
then a fixed wait after the end of animation, then reroute to serving  */

function Play_coffe() {
    
    //useparams must be here

    return (
        <div> 
            <img src="../public/cloud.png" alt="Cloud" className="cloud11" />
            <img src="../public/cloud.png" alt="Cloud" className="cloud22" />
            <img src="../public/cloud.png" alt="Cloud" className="cloud33" />
            <ThreeBoxes/>
        </div>

    )
}

function ThreeBoxes(){ // star amountfrom link

    const [volume, setVolume] = useState(1);
    const navigate = useNavigate();

    return (
        //"Beacon_JE6_BE2.png"          // CHANGE THE IMAGES FOR THIS ONE!!!!!! to beans
        <div className='container'>
          <div className='coffee-machine'>  
            <div className='coffeebox'>
                <div className='coffeebox2'>
                    <img src="/testBox.png" />     
                    <div className='coffeebar'>
                        <Draggableitem currentV = {volume} setV ={setVolume}/> 
                    </div>    
                </div>            
                <div className='coffee-buttons-box'>
                    <Pressable_box className="milk-button" currentV = {volume} navigate={navigate} />
                </div>
            </div>      
          </div>
        </div>
    )
    
}

function Pressable_box ({currentV, navigate}) {

    const [hasPressed, setHasPressed] = useState(false);

    const handlePress = () => { // IS SUPPOSED TO HAVE A DELAY THEN REROUTE TO SERVING

        if (hasPressed == true) return; // returns so that you can't press other buttons after pressing one once
        // make the animation on a timer since coffee isn't a hold game, but jsut press
        // after timer go to serving.jsx

        setHasPressed(true);
        console.log(currentV);
        let staramount = 0;
        
        if (currentV === 2){
            staramount += 1;
        }
    
        setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url
                
            console.log("after press?")
            navigate(`/playmilk/${ staramount }`);
    
        }, 2000);
    
        //ratingsystem(currentV, staramount); // can also reroute here
        
    };


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={handlePress} onTouchStart={handlePress}
            > {/* handles holding on the div */}

            <div className="milk-button">
                <img
                    src= "/Coffeebean1-btn.svg"
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

function Draggableitem ({currentV, setV}) {
    const [xPosition, setXPosition] = useState(10);

    const snappos = (e, data) => {
        //console.log("Current X position:", data.x);

        if(data.x < 37){
            data.x = 50;
            setXPosition(10)
            setV(1);
        } 
        else if(data.x < 100){
            setXPosition(72)
            setV(2);
        }
        else {
            setXPosition(140)
            setV(3);
        }

    };
    
    return (
        <Draggable 
            onStop={snappos}
            axis="x" // Restricts dragging vertically
            position={{ x: xPosition, y: 0 }} // Controlled position
            bounds={{left: 10, right: 210}}
        >
            <div
                style={{
                    width: "5%",
                    height: "85%",
                    backgroundColor: "white",
                    border: "2px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "grab",
                    borderRadius: "5px"
                }}
            >
            </div>
        </Draggable>
    );
};

export default Play_coffe;