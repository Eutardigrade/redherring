import React, { Component } from 'react';
import "./SearchBar.css"

export default class SearchBar extends Component {
    render() {
        return (
       <div className="RightPane">  
       <form>
    <input type="text" class="search" placeholder="Start typing a word" />
    <ul class="suggestions">
      <li>Filter for a phrase</li>
    </ul>
    </form>
    </div>        
        )
    }
}
