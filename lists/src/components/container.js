import React, { Component } from 'react'
import axios from "axios"
import Item from "./item"
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


    rem=(id)=>{
        var x=[...this.state.data]
        // console.log(x)
       var x1=x.filter(e=>{return e.id!==id})
       console.log(x1)
       this.setState({data:x1})
    }
    
    render() {
        
        return (
            <div>
                {this.state.data.map(e=>{return <Item value={e} rem={this.rem}/>})}
            </div>
        )
    }
}
