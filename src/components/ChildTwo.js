import React from "react";

const ChildTwo=(prop)=>{
    return (
        <div className="child-two">
            {console.log(prop)}
            <h2>Child Component 2</h2>
            <button onClick={()=>prop.change('Option 2')}>Option 2</button>
        </div>
    )
}

export default ChildTwo