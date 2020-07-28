import React,{cloneElement} from 'react'
import './Icone.css'

export default (props) =>{
    const estilo = {
        className: "icone"
    }
    return (
        <div className="icone">
            {React.Children.map(props.children,(child)=>cloneElement(child,{...estilo}))}
        </div >
    )
}