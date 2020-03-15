import React, { Component } from 'react';
import "./CardIndex.css"

export default class CardIndex extends Component {
    render() {
        return (
            <div className="LeftPane">
                <ul>List of all the cards in certain order
                    <li>Red Herrings</li>
                    <li>White Elephant</li>
                    <li>Black Leg</li>
                </ul>
            </div>
        )
    }
}
