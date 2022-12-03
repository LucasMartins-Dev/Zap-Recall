import seta from '../assets/img/seta_play.png'
import voltar from '../assets/img/seta_virar.png'
import certo from '../assets/img/icone_certo.png'
import erro from '../assets/img/icone_erro.png'
import quase from '../assets/img/icone_quase.png'
import React from 'react';

export default function Card (props){
    
    
   
    const conteudo_botao=['Não lembrei','Quase não lembrei','Zap!']
    const[card,setcard]=React.useState(<div data-test="flashcard" className="pergunta-fechada">
    <div data-test = "flashcard-text">Pergunta {props.card.index + 1}</div>
    <img data-test="play-btn" onClick={clicacard} src={seta}/>
</div>)

    function clicacard(){

        setcard(<div data-test="flashcard" className="pergunta-aberta">
        <div data-test = "flashcard-text">{props.card.question}</div>
        <img data-test="turn-btn" onClick={resposta} src={voltar}/>
    </div>)
    }
    function cardred(){
        props.card.virado = true;
            setcard(<div data-test="flashcard" className="pergunta-fechada red">
            <div data-test = "flashcard-text" style={{color:'#FF3030'}}>Pergunta {props.card.index + 1}</div>
            <img data-test = "no-icon" src={erro}/>
        </div>)
        let contar = 0;
        for(let i = 0 ; i<props.cards.length;i++){
            if(props.cards[i].virado === true){
                contar++
            }
        }
        props.setcont(contar)
        
    }
    function cardyellow(){
        props.card.virado = true;
        setcard(<div data-test="flashcard" className="pergunta-fechada yellow">
        <div data-test = "flashcard-text" style={{color:'#FF922E'}}>Pergunta {props.card.index + 1}</div>
        <img data-test = "partial-icon" src={quase}/>
    </div>)
    let contar = 0;
    for(let i = 0 ; i<props.cards.length;i++){
        if(props.cards[i].virado === true){
            contar++
        }
    }
    props.setcont(contar)
    
 
    }
    function cardgreen(){
      
        props.card.virado = true;
        setcard(<div data-test="flashcard" className="pergunta-fechada green">
        <div data-test = "flashcard-text" style={{color:'#2FBE34'}}>Pergunta {props.card.index + 1}</div>
        <img data-test = "zap-icon" src={certo}/>
    </div>)
    let contar = 0;
    for(let i = 0 ; i<props.cards.length;i++){
        if(props.cards[i].virado === true){
            contar++
        }
    }
    props.setcont(contar)

    }
    const cores =[{test:'no-btn',funct:cardred ,name:'Não lembrei', color:'#FF3030'},{test:'partial-btn',funct:cardyellow , name:'Quase não lembrei', color:'#FF922E'},{test:'zap-btn',funct:cardgreen , name:'Zap!' ,color:'#2FBE34'}]
    function resposta(){
        console.log('oi')
        setcard(<div data-test="flashcard" className="pergunta-aberta">
        <div data-test = "flashcard-text">{props.card.answer}</div>
        <div className='container-botoes'>
        {cores.map((cor)=>
            <button data-test={cor.test} onClick={cor.funct} style={{backgroundColor:cor.color}}>{cor.name}</button>
            )}
        </div>
    </div>)
    }
    return(
        card
    )
}