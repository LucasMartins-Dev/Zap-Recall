import seta from '../assets/img/seta_play.png'
import voltar from '../assets/img/seta_virar.png'
import certo from '../assets/img/icone_certo.png'
import erro from '../assets/img/icone_erro.png'
import quase from '../assets/img/icone_quase.png'
import React from 'react';

export default function Card (props){
    const conteudo_botao=['Não lembrei','Quase não lembrei','Zap!']
    const[card,setcard]=React.useState(<div className="pergunta-fechada">
    <div>Pergunta {props.card.index}</div>
    <img onClick={clicacard} src={seta}/>
</div>)
    function clicacard(){
        setcard(<div className="pergunta-aberta">
        <div>{props.card.question}</div>
        <img onClick={resposta} src={voltar}/>
    </div>)
    }
    function cardred(){
        let acertos = props.contador + 1;
        props.setcontador(props.contador+acertos)
        setcard(<div  className="pergunta-fechada">
        <div style={{color:'#FF3030'}}>Pergunta {props.card.index}</div>
        <img  src={erro}/>
    </div>)
    }
    function cardyellow(){
        let acertos = props.contador + 1;
        props.setcontador(props.contador+acertos)
        setcard(<div className="pergunta-fechada">
        <div style={{color:'#FF922E'}} >Pergunta {props.card.index}</div>
        <img  src={quase}/>
    </div>)
    }
    function cardgreen(){
        let acertos = props.contador + 1;
        props.setcontador(props.contador+acertos)
        setcard(<div  className="pergunta-fechada">
        <div style={{color:'#2FBE34'}} >Pergunta {props.card.index}</div>
        <img  src={certo}/>
    </div>)
    }
    function resposta(){
        
        setcard(<div className="pergunta-aberta">
        <div>{props.card.answer}</div>
        <div className='container-botoes'>
            <button onClick={cardred} style={{backgroundColor:'#FF3030'}}>{conteudo_botao[0]}</button>
            <button onClick={cardyellow} style={{backgroundColor:'#FF922E'}}>{conteudo_botao[1]}</button>
            <button onClick={cardgreen} style={{backgroundColor:'#2FBE34'}}>{conteudo_botao[2]}</button>
        </div>
    </div>)
    }
    return(
        card
    )
}