import React from 'react'

export default function Card(props) {
    const {front,back,flipped}=props.values;
    return (
        <div className = "CardContainer">
            <h1>{flipped?back:front}</h1>
        </div>
    )
}
