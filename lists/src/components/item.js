import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="box">
                
        <span> {this.props.value.id}. </span> {this.props.value.title}
                

            </div>
        )
    }
}
