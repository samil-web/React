import React from "react";

import '../src/index.css'

const Button = ({ title = "Nothing" }) => {
    return (
        <div>
            <button className='btn'>
                {title}
            </button>
        </div>
    )
}

export default Button