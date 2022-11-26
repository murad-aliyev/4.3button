import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {

  state = {
    text: "Subscribe",
    subscribed: false,
    style: "button-state1"
  }


  clickHandler = (event) => {
    this.setState({ text: ([this.state.text]=="Subscribe")?"Subscribed":"Subscribe", 
    subscribed: [!this.state.subscribed],
    style: ([this.state.style]=="button-state1")?"button-state2":"button-state1"
  });
  };
 
  render() {
    return (
      <div><button className={this.state.style} type="button" onClick={this.clickHandler}>
      {this.state.text}
   </button></div>
    );
  }
 }

 export default SubscribeButton