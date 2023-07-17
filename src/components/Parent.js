import React,{useState} from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent=()=>{
    let [selected,setSelected]=useState('')
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <ChildOne change={setSelected}/>
            <ChildTwo change={setSelected}/>
            <div className="selected">Selected Option: <span>{selected}</span></div>
        </div>
    )
}

export default Parent