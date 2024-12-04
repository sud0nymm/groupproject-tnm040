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

function Play_coffee() {
    
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

    const [animationStarted, setAnimationStarted] = useState(false);
    const [volume, setVolume] = useState(1);
    const navigate = useNavigate();

    const handleStartAnimation = () => {
      setAnimationStarted(true);
    }

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
                    <Pressable_box className="milk-button" currentV = {volume} navigate={navigate} onStart={handleStartAnimation} />
                </div>
            </div>   

            <div className='coffeeMug'>
                <div className='fillAnimationContainer'>
                    <Animated_Box /*currentV = {volume}*/ animationStarted={animationStarted} />
                </div>
            </div>
          </div>
        </div>
    )
    
}

function Animated_Box({animationStarted}) {
  return (
    <div className={`coffeeFillAnimationBox ${animationStarted ? 'coffeeFillAnimation' : ''}`} /*style={{maxHeight: ((currentV*100)/2) + 'px'}}*/ />
  )
}

function Pressable_box ({currentV, navigate, onStart}) {

    const [hasPressed, setHasPressed] = useState(false);

    const handlePress = () => { // IS SUPPOSED TO HAVE A DELAY THEN REROUTE TO SERVING

        if (hasPressed == true) return; // returns so that you can't press other buttons after pressing one once
        // make the animation on a timer since coffee isn't a hold game, but jsut press
        // after timer go to serving.jsx

        setHasPressed(true);
        if(onStart) onStart();
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            onClick={handlePress} onTouchStart={handlePress}
            > {/* handles holding on the div */}

            <div className="milk-button">
                <img
                    src= "/Coffeebean1-btn.svg"
                    alt = "coffee bean"
                    width= "70px" //widht and height?
                    height= "70px"
                />
            </div>

            <div className='coffeePourAnimationContainer'> 
                <div className={`coffeePourAnimationBox  ${hasPressed ? 'coffeePourAnimation' : ''}`}/>
            </div>
            

        </div>
    )
}

function Draggableitem ({currentV, setV}) {
    const [xPosition, setXPosition] = useState(10);

    const snappos = (e, data) => {
        //console.log("Current X position:", data.x);

        if(data.x < 40){
            data.x = 50;
            setXPosition(10)
            setV(1);
        } 
        else if(data.x < 109){
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
            bounds={{left: 10, right: 140}}
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

export default Play_coffee;