import React from 'react'
import './App.css'
import Felipe from '../perfis/perfil-felipe'
import Button from '../components/Button'

export default (props) =>{
    return( 
        <div className="main">
            <h1>Gerador de frases de Senso Comum</h1>
            <Felipe></Felipe>
            <Button></Button>
        </div>)
}