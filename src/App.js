import React from 'react'
import './App.css'
import Tweet from './layout/Tweet'
import Felipe from './components/perfil-felipe'
import Button from './components/Button'

export default (props) =>{
    return( 
        <div className="main">
            <h1>Gerador de frases de Senso Comum</h1>
            <br/>
            <Tweet>
                <Felipe></Felipe>
            </Tweet>
            <Button></Button>
        </div>)
}