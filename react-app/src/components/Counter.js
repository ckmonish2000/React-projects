import React,{Component} from "react";


class Counter extends Component{
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
  render(){

  return(
      <React.Fragment>
      <div className="bn">
    <h6 className="badge"  style={this.clr()}><h1>{this.formatCount()}</h1></h6>
    <span>  <button className="incr">increment</button></span>
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
