import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './componentStyles.css'
import { useParams } from 'react-router-dom';


function RatingPage(){

    const { id } = useParams();
    const staramount = id;
    console.log(staramount);// is the amount of stars the user got, sent in by the URL

    //sndfgjikliwrhjgoäiewrhjngoirehgtiåpuow4rugbhiögwhuip

    return (
       <> <div> <p> Rating Page </p> </div>
        <p></p>
        </>
    )
}

export default RatingPage