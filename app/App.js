import React from "react";
import Bar from "./Bar/Bar.js";

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </div>
    }
}

export default App;