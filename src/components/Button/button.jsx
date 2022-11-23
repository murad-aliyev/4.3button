import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
  clickHandler = (event) => {
    console.log('Button click!');
  };
 
  render() {
    return (
      <div><button type="button" onClick={this.clickHandler}>
      Subscribe
   </button></div>
    );
  }
 }

 export default SubscribeButton