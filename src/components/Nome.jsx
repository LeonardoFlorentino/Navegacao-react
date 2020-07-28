import React from 'react'
import './Nome.css'

export default (props) =>{
    return (
        <div className="nome">
            {props.children}
        </div>
    )
}