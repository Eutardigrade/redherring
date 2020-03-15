import React, {Component} from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import SearchBar from './SearchBar';
import CareIndex from './CardIndex'

class App extends Component {
  state ={
    id: 0,
    phrase: "Red Herring",
    description: "This phrase is used to describe something that provides a false or misleading clue, often in a detectie story",
    flipped: false
   }
   
  handleFlip =() => {
    this.setState(prevState=>{
      return {  
      flipped: !prevState.flipped
    }})
  }
  render(){
    const {id, phrase, description, flipped} = this.state;
    const values= {id, phrase, description, flipped};
  return (
    <div className="CardContainer">
     
      <Header />
      <CareIndex />
      
      <Card values = {values} handleFlip={this.handleFlip} />
      <SearchBar />
    </div>
  );
}}


export default App;
