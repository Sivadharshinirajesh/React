import React from "react";
class Lifecycle2 extends React.Component{
    constructor()
{
    super();
    this.state={value:"welcome to",name:"Frontend"};
}
   componentWillMount(){
    alert("Learn Reacts Lifecycle");

}
changevalue=()=>{
    this.state=({name:"learn Reactjs events"})
}
componentDidMount(){
    setTimeout(()=>{
        this.setState({name:"React Js"})
    },5000)
}
componentWillUpdate(){
    alert("will updated ! are you sure?")
}
render(){
    return(
        <div>
            <h1>{this.state.value}{this.state.name}</h1>
        </div>
    )
}
}
export default Lifecycle2