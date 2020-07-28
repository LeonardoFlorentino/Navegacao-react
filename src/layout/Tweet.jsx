import React from 'react'
import { cloneElement } from 'react'
import './Tweet.css'

export default props =>{

    const components = 
        <div>
            {React.Children.map(props.children,(child, id) => {
                console.log(id)
                return cloneElement(child, {...props,key: id})
            })[0]}
        </div>

    return(
        <div className="tweet">
            {components}
        </div>
    )
}