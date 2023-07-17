import React from "react";
const ChildOne=(prop)=>{
    return (
    <div className="child-one">
        <h2>Child Component 1</h2>
        <button onClick={()=>prop.change('Option 1')}>Option 1</button>
    </div>
    )
}


export default ChildOne