import React from 'react'

import img_felipe from './imgs/felipe-neto.jpg'
import img_flag from './imgs/black-flag.svg'
import img_brasil from './imgs/brasil-flag.svg'
import img_verificado from "./imgs/verified-badge-symbol.png"

import Tweet from '../layout/Tweet'
import Icone from '../components/Icone'
import Nome from '../components/Nome'
import Conteudo from '../components/Conteudo'
//import dados_felipe from './dados-felipe.json'

export default (props) => {
    //const dados = JSON.parse(dados_felipe)
    return(
        <React.Fragment>
            <Tweet>
                <Icone>
                    <img  alt="felipe neto logo" src={img_felipe}></img>
                </Icone>
                <Nome>
                    Felipe Neto
                    <img src={img_brasil} alt="bandeira brasil"></img>
                    <img src={img_flag} alt="bandeira preta"></img>
                    <img src={img_verificado} alt="símbolo de certificação"></img>
                </Nome>
                <Conteudo>
                    {props.valor}
                </Conteudo>
            </Tweet>
        </React.Fragment>
    )
}