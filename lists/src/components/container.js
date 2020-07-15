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
    title=null;

    handle=(e)=>{
        
        this.title=e.target.value
        console.log(this.title)

    }
    addele=()=>{
        
        var x=[...this.state.data]
        var val={userId: 2, id: this.state.data.length+1, title: this.title, body:"fuck you" }
        x.push(val)
        console.log(x)
        this.setState({data:x})
    }
    render() {
        
        return (
            <div>
                <div className="forms">
                <input type='text' onChange={this.handle} className="boxe"/>
                <button onClick={this.addele} className="Dbtns">submit</button>
                </div>
                {this.state.data.map(e=>{return <Item value={e} rem={this.rem}/>})}
            </div>
        )
    }
}
