import React from 'react'
import './Button.css'
import logo from '../imgs/twitter-logo-inverse.png'

export default (props) =>{
    return(
        <div className="btn">
            <img src={logo} alt="logo twitter"></img>
            <button className="button">Gerar</button>
        </div>
    )
}