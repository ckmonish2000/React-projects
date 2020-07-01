

import React,{Component} from "react";


class Counter extends Component{
state={
  count:0,
  tags:["tag1","tag2","tag3"]

};

clr(){
  var clr=(this.state.count===0) ? "#d19c08" :"#323ea8";
  var stl={
    background:clr
  }
  return stl
}

handleIncr(){
  console.log("incr");
}

  render(){

  return(
      <React.Fragment>
    <div className="bn">
    <h3 className="badge"  style={this.clr()}>{this.formatCount()}</h3>
    <span>  <button className="incr" onClick={this.handleIncr}>increment</button></span>
    </div>
    </React.Fragment>
    );
  }

  formatCount(){
    const {count}=this.state
    return count === 0 ? "Zero" : count ;
  }
}


export default Counter
