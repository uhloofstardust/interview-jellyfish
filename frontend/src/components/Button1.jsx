import React from "react";
import './Button1.css'

const Button1 = ({textContent, action}) => {

    return (
        <>

            <button onClick={() => { action() }} className="button1" >
                {textContent}
            </button>
        </>
    )
}

export default Button1;