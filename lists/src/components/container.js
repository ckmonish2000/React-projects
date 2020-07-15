import React, { Component } from 'react'
import axios from "axios"
export default class Container extends Component {
    state={
        data:[]
    }
    constructor(){
        super();
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
            // console.log(res.data)
            this.setState({data:res.data})
        })
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
