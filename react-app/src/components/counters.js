import React , {Component} from "react";
import Counter from "./Counter.js"
class Counters extends Component{
  state={counters:[
    {id:1,value:0},
    {id:2,value:0},
    {id:3,value:0},
    {id:4,value:0},
  ] }
  handleDel=()=>{
    console.log("fucker");
  }
  render(){
    return(
      <div>
        {this.state.counters.map(counter=>
           <Counter key={counter.id} value={counter.value}  onDelete={this.handleDel}/>)}
      </div>

      /* children :<div>
        {this.state.counters.map(counter=>
           <Counter key={counter.id} value={counter.value}><h3>hello</h3></Counter>)}
      </div>*/
    )
  }
}


export default Counters
