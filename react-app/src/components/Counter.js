

import React,{Component} from "react";


class Counter extends Component{
  // constructor(){
  //   super();
  //   this.handleIncr=this.handleIncr.bind(this);
  // }
state={
  value:this.props.value,
  };

clr(){
  var clr=(this.state.value===0) ? "#d19c08" :"#323ea8";
  var stl={
    background:clr
  }
  return stl
}

handleIncr=()=>{
  var val=this.state.value+1;
  console.log("incr",this);
  this.setState({value:val})
  console.log(this.state.tags);
}

// handleDelete=()=>{
//   this.props.onDelete();
// }
  render(){
console.log(this.props);
  return(
      <React.Fragment>
    <div className="bn">
    {/* children {this.props.children}*/}
    <h3 className="badge"  style={this.clr()}>{this.formatCount()}</h3>
    <span>  <button className="incr" onClick={this.handleIncr}>increment</button></span>
    <button className="del" onClick={()=>this.props.onDelete(this.props.id)}>delete</button>
    </div>
    </React.Fragment>
    );
  }

  formatCount(){
    const {value}=this.state
    return value === 0 ? "Zero" : value ;
  }
}


export default Counter
