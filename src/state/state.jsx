import React from "react";
class Reactstate extends React.Component{
    constructor(){
        super();
        // this.state={initialvalue:"Welcome",name:" guys"}
        this.state={initialvalue:0}
    }
    incrementvalue= () =>
    {
        // this.setState({initialvalue:"Thankyuou for coming"});
        this.setState({initialvalue:this.state.initialvalue+1})
       
        // this.setState({name:"Girls"})
       }
       decrement =()=>
       {
        this.setState({initialvalue:this.state.initialvalue-1})
       }
       startvalue =()=>
       {
        this.setState({initialvalue:"0"})
       }
    render(){
        return(
            <div>
                
                <h1>{this.state.initialvalue}<span></span></h1><br/>
                <button className="btn"onClick={this.incrementvalue}>increment</button>

                <button className="btn1"onClick={this.decrement}>decrement</button>
                
                <button className="btn2"onClick={this.startvalue}>Startvalue</button>
            </div>
        )
    }
}
export default Reactstate