import React from 'react'

function Button({children, onClick, className}) {
    return (
        <button className={`button button-${className}`} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button
