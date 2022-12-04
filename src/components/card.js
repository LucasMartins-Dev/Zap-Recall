import seta from '../assets/img/seta_play.png'
import voltar from '../assets/img/seta_virar.png'
import certo from '../assets/img/icone_certo.png'
import erro from '../assets/img/icone_erro.png'
import quase from '../assets/img/icone_quase.png'
import React from 'react';
import styled  from 'styled-components'

export default function Card (props){
    
    
   
    const conteudo_botao=['Não lembrei','Quase não lembrei','Zap!']
    const[card,setcard]=React.useState(<Perguntafechada data-test="flashcard">
    <p data-test = "flashcard-text">Pergunta {props.card.index + 1}</p>
    <img data-test="play-btn" onClick={clicacard} src={seta}/>
</Perguntafechada>)

    function clicacard(){

        setcard(<Perguntaaberta data-test="flashcard" >
        <p data-test = "flashcard-text">{props.card.question}</p>
        <img data-test="turn-btn" onClick={resposta} src={voltar}/>
    </Perguntaaberta>)
    }
    function cardred(){
        props.card.virado = true;
            setcard(<Perguntafechada data-test="flashcard" className="red">
            <p data-test = "flashcard-text" style={{color:'#FF3030'}}>Pergunta {props.card.index + 1}</p>
            <img data-test = "no-icon" src={erro}/>
        </Perguntafechada>)
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
        setcard(<Perguntafechada data-test="flashcard" className="yellow">
        <p data-test = "flashcard-text" style={{color:'#FF922E'}}>Pergunta {props.card.index + 1}</p>
        <img data-test = "partial-icon" src={quase}/>
    </Perguntafechada>)
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
        setcard(<Perguntafechada data-test="flashcard" className="green">
        <p data-test = "flashcard-text" style={{color:'#2FBE34'}}>Pergunta {props.card.index + 1}</p>
        <img data-test = "zap-icon" src={certo}/>
    </Perguntafechada>)
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
        setcard(<Perguntaaberta data-test="flashcard">
        <p data-test = "flashcard-text">{props.card.answer}</p>
        <Botoes>
        {cores.map((cor)=>
            <button data-test={cor.test} onClick={cor.funct} style={{backgroundColor:cor.color}}>{cor.name}</button>
            )}
        </Botoes>
    </Perguntaaberta>)
    }
    return(
        card
    )
}

const Perguntafechada = styled.div`

  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;


 p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}


`
const Perguntaaberta = styled.div`

  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


 img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`
const Botoes = styled.div`

  display: flex;
  justify-content: space-between;

button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: blue;
  border-radius: 5px;
  border: 0px solid blue;
  padding:5px;
}
`