import React from "react";
class Classprops2 extends React.Component{
    render(){
        return(
            <div>
                <h1>your name {this.props.name.name}
            your age is{this.props.name.age}</h1>
            <h1>name</h1>
            </div>
        )
    }
}
export default Classprops2