import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './componentStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

function Serving() {

  let stars = useParams();
  const [hasSnapped, setHasSnapped] = useState(false); 

  return (
    <div>
      <img src="../cafe.png" alt="" className='cafeb3' />
      {!hasSnapped && <div className='goalBox'></div>}      
      <div className='full'>
        <img src="/mugg.png" alt="" className='mug'/>
        <div className='orderbox2' />
        <div className='desertshelf'>
          <DraggableBox imgsrc={"/Kanelbulle.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
          <DraggableBox imgsrc={"/Kladdkaka.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
          <DraggableBox imgsrc={"/Muffin.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
          <DraggableBox imgsrc={"/Cookie.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
        </div>
      </div>
    </div>
  )
}

function DraggableBox({imgsrc, stars, setHasSnapped, hasSnapped}) {

  let staramount = parseInt(stars, 10);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgWidth, setImgWidth] = useState(70); // state for dynamic width
  

  const navigate = useNavigate();
  
  const handleDragStart = (e) => { //only for image to be draggable
    e.preventDefault();
  };

  const handleStop = (e, data) => {
    const goalElement = document.querySelector('.goalBox');
    const goalRect = goalElement.getBoundingClientRect();
    const draggableRect = e.target.getBoundingClientRect();

    const isInHitbox =
        draggableRect.left < goalRect.right - 30 &&
        draggableRect.right > goalRect.left + 30 &&
        draggableRect.top < goalRect.bottom - 30 &&
        draggableRect.bottom > goalRect.top + 30;
    
    if (isInHitbox) {
      if (imgsrc == "/Muffin.svg"){ 
        staramount += 1;
      }
        setImgWidth(100);
        console.log('Snap successful!');
        setPosition(goalRect.left, goalRect.top);
        setHasSnapped(true);

        setTimeout(() => {
            navigate(`/ratingpage/${staramount}`);
        }, 1500);
    } else {
        console.log('Snap failed.');
    }
};

  return (

    <div className='desertbox'>
      <Draggable 
      onStart={handleDragStart} 
      onStop={handleStop}
      position={position}
      disabled={hasSnapped} // Disable dragging if hasSnapped is true
      >
        <div className="testbox" style={{ cursor: 'move' }}>
          <img 
          src = {imgsrc} 
          alt = "Drag this"
          style={{ width: `${imgWidth}px` }}
          onDragStart={(e) => e.preventDefault()} // Prevent native drag
          />
        </div>
      </Draggable>
    </div>
  )
}

function xPos(imgsrc){
  
  switch (imgsrc){ // dynamically picking the goal area
    case "/Kanelbulle.svg": return 137;
    case "/Kladdkaka.svg": return 58;
    case "/Muffin.svg": return -20;
    case "/Cookie.svg": return -98;
  }
  
  return 0;
}

export default Serving;
