import React from "react"; 
import "./Bar.less";
class Bar extends React.Component{
    constructor(){
        super();
        this.state = {
            v : 0
        } 
        //bind this
        this.change = (this.change).bind(this); 
    }

    change(event)
    {
        this.setState({
            "v": event.target.value
        });
    }

    render(){
        return <div className="Bar_kaola">
            <input type="range" className="bar"/>
            <input type="text" min="0" max="255" value={this.state.v} onChange={this.change}/>
            <input type="number" min="0" max="255" value={this.state.v} onChange={this.change}/>
        </div>;
    }
}

export default Bar;