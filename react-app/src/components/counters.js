import React , {Component} from "react";
import Counter from "./Counter.js"
class Counters extends Component{
  state={ }
  render(){
    return(
      <div>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>        
      </div>
    )
  }
}


export default Counters
