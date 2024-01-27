import React from "react";


const MenuItem = (props) => {
    const handleClick = () => {
        if (props.openContact) {
            props.openContact();
        }
    }
    return (
        <div onClick={handleClick} className={props.className + (props.active ? " active" : "") + (props.highlight ? " highlight" : "")}>
            {
                props.id ? 
                    (<a href={"#" + props.id}>
                        {props.content}
                    </a>) : 
                    (
                        <p> {props.content} </p>
                    )
            }
        </div>
    ); 
} 
  
export default MenuItem;




