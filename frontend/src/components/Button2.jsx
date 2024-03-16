import React from "react";
import './Button2.css'

const Button2 = ({textContent, action}) => {

    return (
        <>
            <button onClick={() => { action() }} className="button2" >
                {textContent}
            </button>
        </>
    )
}

export default Button2;