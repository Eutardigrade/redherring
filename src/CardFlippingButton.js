import React from 'react'

export default function CardFlippingButton(props) {
    const {flipped} = props.values
    return (
        <div>
            <button onClick={props.handleFlip}>{flipped?"What is the phrase?":"what's the story?"}</button>
        </div>
    )
}
