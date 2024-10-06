


import { Button } from "react-bootstrap"
import { Component } from "react";



class Counter extends Component {
          state={
            count:0
          }
       countHandler=()=>{
           this.setState({
            count:this.state.count+1
           })
          }
          render(){  
       return(
        <>
          <Button onClick={this.countHandler}>ClickMe!</Button>
          <h3>Counter Display:{this.state.count}</h3>
          </>
       )
    }
}
export default Counter