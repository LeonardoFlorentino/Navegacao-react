import React,{Componente, Component} from 'react'
import './App.css'
import Felipe from '../perfis/perfil-felipe'
import Button from '../components/Button'
import frases from "../bd/frases.json"


const initialState = {
    displayPhrase: "Machista!!!",
    current: 1,
}

export default class App extends Component{

    state = {...initialState}
    

    constructor(props) {
        super(props)
        this.gerarFrase = this.gerarFrase.bind(this)
        this.gerarFrase()
    }

    gerarFrase(){
        let aleat = Math.floor(10*Math.random())
        let tweet = frases[aleat]
        this.setState({displayPhrase: tweet,current: aleat})
        
    }

    render(){
        return(
            <div className="main">
                <h2>Gerador de frases de Senso Comum</h2>
                <hr/>
                <Felipe valor={this.state.displayPhrase}></Felipe>
                <Button click={this.gerarFrase}></Button>
            </div>)
    }
}

