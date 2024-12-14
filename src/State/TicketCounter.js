import React, { Component } from 'react'
import ShowCounter from './ShowCounter';
export class TicketCounter extends Component {
    constructor(){
        super();
        this.state={
            TicketCount:0
        }
        
    }
    handlePlus=()=>{
        this.setState((data)=>({
            TicketCount: data.TicketCount+1,
        }));
    };
    handleMinus=()=>{
      this.setState((data)=>({
          TicketCount: data.TicketCount-1,
      }));
  };

  componentDidMount()
  {
    console.log("componentDidMount....,,,,")
  }
  componentDidMount()
  {
    console.log("componentDidUpdate....>>>>")
  }
  
  render() {
    return (
      <div>
        <center>
        <h1>TicketCounter{this.state.TicketCount}</h1>
        <button onClick={this.handlePlus}>+</button>
        <ShowCounter data={this.state.count}/>
        <button onClick={this.handleMinus}>-</button>
        </center>
      </div>
    )
  }
}

export default TicketCounter
