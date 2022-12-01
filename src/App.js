import logo from './assets/img/logo.png'
import './assets/css/style.css'
import Card from './components/card';
import React from 'react';
import Concluido from './components/concluidos';

export default function App() {
  const cards = [
    { index:1 , question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { index:2 , question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { index:3 , question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { index:4 , question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { index:5 , question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { index:6 , question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { index:7 , question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { index:8 , question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
 const[contador,setcontador]=React.useState(0)
  
console.log(contador)
  return (
    <div className="screen-container">
      <div className='logo-container'>
        <img src={logo}/>
        <h1>ZapRecall</h1>
      </div>
      {cards.map((card)=>
      <Card 
      contador={contador} 
      setcontador={setcontador}
      card={card}
      /> )}
      <Concluido
       contador={contador} 
       />
    </div>
  );
}


