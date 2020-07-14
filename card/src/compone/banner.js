import React, { Component } from 'react'

export default class Banner extends Component {
    calldel=()=>{
        this.props.del(this.props.value.id)
    }
    render() {
        
        return (
            <div className="banner">
                <img src={this.props.value.img} alt={this.props.value.id}/>
        <h5>{this.props.value.name}</h5>
        <button type="button" onClick={this.calldel}>del</button>
            </div>
        )
    }
}


