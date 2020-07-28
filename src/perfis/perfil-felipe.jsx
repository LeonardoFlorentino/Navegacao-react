import React from 'react'
import img_felipe from './imgs/felipe-neto.jpg'
import flag from './imgs/black-flag.svg'
import brasil from './imgs/brasil-flag.svg'
import Tweet from '../layout/Tweet'
import Icone from '../components/Icone'
import Nome from '../components/Nome'
import Conteudo from '../components/Conteudo'
import dados_felipe from './dados-felipe.json'

export default (props) => {
    //const dados = JSON.parse(dados_felipe)
    return(
        <div>
            <Tweet>
                <Icone>
                    <img  alt="felipe neto logo" src={img_felipe}></img>
                </Icone>
                <Nome>
                    <img src={brasil} alt="bandeira brasil"></img>
                    <img src={flag} alt="bandeira preta"></img>
                </Nome>
                <Conteudo>
                    Ontem (27/07) nossa equipe derrubou 1247 vídeos enviados p/ Facebook e Instagram com informações caluniosas sobre mim, a maioria com acusações de pedofilia.
                    Hoje, até 14h, já foram 664  vídeos derrubados.
                    Cada 1 vídeo desse tem potencial de atingir milhares-milhões de pessoas.
                </Conteudo>
            </Tweet>
        </div>
    )
}