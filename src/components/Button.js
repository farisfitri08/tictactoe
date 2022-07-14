import React from "react";

export default props => (
    <div style={{pointerEvents: props.disabledClick ? "none" : ""}} className='block' onClick={props.handleClick}>{props.text2}</div>
);