import React, {Component} from 'react';
import './App.css';
import Card from './Card';
import CardFlippingButton from './CardFlippingButton';

class App extends Component {
  state ={
    id: 0,
    front: "Red Herring",
    back: "This phrase is used to describe something that provides a false or misleading clue, often in a detectie story",
    flipped: false
  }
  handleFlip =() => {
    this.setState(prevState=>{
      return {
      flipped: !prevState.flipped
    }})
  }
  render(){
    const {id, front, back, flipped} = this.state;
    const values= {id, front, back, flipped};
  return (
    <div className="App">
      <Card values = {values} />
      <CardFlippingButton handleFlip={this.handleFlip} values={values}/>
    </div>
  );
}
}

export default App;
