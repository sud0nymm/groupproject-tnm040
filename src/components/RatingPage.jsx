import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useParams, useLocation,Link } from 'react-router-dom';
import './Ratingstyle.css'

function RatingPage(){

    const location = useLocation();    
    const { id } = useParams();
    const staramount = id;
    console.log(staramount);// is the amount of stars the user got, sent in by the URL

    function stars(){
        
    }


    return (
       <><div className = 'sliding-background'> 



        <Link to="/"> <button className='replaybutton'></button></Link></div>
    
        </>
    )  

}

export default RatingPage