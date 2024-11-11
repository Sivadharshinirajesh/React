import React from "react";
import Classprops2 from "./props2";
class Classprops extends React.Component{
    render()
    {
        let name2={name:"sivadharshini",age:23}
        return(
            <div>
                <h1> your name is {this.props.name}</h1>
                <Classprops2 name={name2}></Classprops2>
            </div>
        )
    }
}
export default Classprops