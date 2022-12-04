import logo from './assets/img/logo.png'
import './assets/css/style.css'
import Card from './components/card';
import React from 'react';
import Concluido from './components/concluidos';
import styled  from 'styled-components'

export default function App() {
  const cards = [
    { virado: false , index:0 , question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { virado: false , index:1 , question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { virado: false , index:2 , question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { virado: false , index:3 , question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { virado: false , index:4 , question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { virado: false , index:5 , question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { virado: false , index:6 , question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { virado: false , index:7 , question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  const[cont,setcont]=React.useState(0)

console.log(cont)
  return (
    <Screencontainer>
      <Logocontainer>
        <img src={logo}/>
        <h1>ZapRecall</h1>
      </Logocontainer>
      {cards.map((card)=>
      <Card 
      cards={cards}
      key={card.index}
      cont = {cont}
      card={card}
      setcont={setcont}
      /> )}
      <Concluido
       cont={cont} 
       cards={cards}
       />
    </Screencontainer>
  );
}

const Screencontainer = styled.div`
 background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
const Logocontainer = styled.div`

  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
 
 img {
  width: 52px;
}

 h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}

`