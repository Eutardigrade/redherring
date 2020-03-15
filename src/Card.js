import React from 'react'
import './Card.css'
export default function Card(props) {
    const {phrase,description,flipped}=props.values;
    return (
        <div className = "MiddlePane">
            <div className="CardArea">
            {flipped?description:phrase}
            </div>
            <div className="Controls">
            <button className="btn">&lt;</button>
            <button className="btn" onClick={props.handleFlip}>{flipped?"Show phrase":"Show description"}</button>
            <button className="btn">&gt;</button> 
            </div>
            
        </div>
    )
}
