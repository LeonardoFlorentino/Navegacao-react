import React from 'react'
import { cloneElement } from 'react'
import './Tweet.css'

export default props =>{

/*     const components = 
        <React.Fragment>
            {React.Children.map(props.children,(child, id) => {
                return cloneElement(child, {...props,key: id})
            })[1]}
        </React.Fragment> */

    return(
        <div className="tweet">
            {props.children}
        </div>
    )
}