import React,{Component} from "react";


class Counter extends Component{
state={
  count:0,
  tags:[]

};


rednerTags(){
  if( this.state.tags.length===0) return <h1>enter few tags</h1>;
  return <ul>{ this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
}

  render(){

  return(
      <React.Fragment>
      {this.state.tags.length===0 && <h1>enter tags</h1>}
      {this.rednerTags()}
      </React.Fragment>
    );
  }

  formatCount(){
    const {count}=this.state
    return count === 0 ? "Zero" : count ;
  }
}


export default Counter
