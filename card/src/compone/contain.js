import React, { Component } from 'react'
import Banner from "./banner"
export default class Contain extends Component {
    state={
        data:[
            {id:1,
            name:"lucifer morningstar",
            img:"data:image/jpeg;base64,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",
            
        },

        {id:2,
        name:"Constantine",
        img:"data:image/jpeg;base64,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",
       
    }
        ]
    }

    rem=(id)=>{
        var x=[...this.state.data]
        console.log(`id=${id}`)
        console.log(`data=`)
        console.log(x)
        var x1=x.filter((e)=>{return e.id!==id})
        console.log(`after data=`)
        console.log(x1)
        this.setState({data:x1})
        console.log(this)
        
    }
    render() {
        
        return (
            <div>
            {this.state.data.map((e)=>{return <Banner value={e} del={this.rem} key={e.id}/>})}
            
            </div>
        )
    }
}
