

import React,{Component} from "react";


class Counter extends Component{
  // constructor(){
  //   super();
  //   this.handleIncr=this.handleIncr.bind(this);
  // }
state={
  count:0,
  };

clr(){
  var clr=(this.state.count===0) ? "#d19c08" :"#323ea8";
  var stl={
    background:clr
  }
  return stl
}

handleIncr=()=>{
  var val=this.state.count+1;
  console.log("incr",this);
  this.setState({count:val})
  console.log(this.state.tags);
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
