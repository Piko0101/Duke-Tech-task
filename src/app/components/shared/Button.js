import React from 'react'
import '../../styles/Button.scss'

function Button(props) {
    return (
        <button className={`button ${props.className}`} onClick={props.onClick} disabled={props.disabled}>
            {props.children} 
        </button>
    )
}

export default Button
