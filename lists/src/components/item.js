import React, { Component } from 'react'

export default class Item extends Component {
    del=()=>{
        this.props.rem(this.props.value.id);
    }
    render() {

        return (
            <div className="box">
                
        <span> {this.props.value.id}. </span> {this.props.value.title}
        <button onClick={this.del}>Delete</button>

              

            </div>
        )
    }
}
