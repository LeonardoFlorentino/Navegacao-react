import React from 'react'
import './Conteudo.css'

export default (props) =>{
    return(
        <div className="conteudo">
            {props.children}
        </div>
    )
}