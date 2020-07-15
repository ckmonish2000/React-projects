import React, { Component } from 'react'

export default class Item extends Component {
    del=()=>{
        this.props.rem(this.props.value.id);
    }
    render() {

        return (
        <div className="box">
         <div className="base">
        <h5><span> {this.props.value.id}. </span> {this.props.value.title}</h5>
        <button onClick={this.del} className="Dbtn">Done</button>
</div>            

            </div>
        )
    }
}
