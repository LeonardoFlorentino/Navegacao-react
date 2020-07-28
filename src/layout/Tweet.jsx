import React from 'react'
import { cloneElement } from 'react'
import './Tweet.css'

export default props =>{
    return(
        <div className="tweet">{
            React.Children.map(props.children,(child,i) =>{
                return cloneElement(child,{...props, key: i})
            })}
        </div>
    )
}