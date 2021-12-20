import { useEffect, useState } from 'react';
import Display from '../components/display/Display';
import Conversao from '../components/conversao/Conversao';



export default function Home(props) {

  const temp = props.data;
  const cotacoes = Object.values(temp);

  return (
    <>
      <div className='box'>
        {cotacoes.map((cotacao) => 
          <Display key={cotacao.name} venda={cotacao.ask} nome={cotacao.name} code={cotacao.code}/>
        )}
      </div>

      <div className='box'>
        <Conversao moedas={cotacoes}/>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://economia.awesomeapi.com.br/last/USD,EUR-BRL');
  const data = await res.json();
  return {
    props: { data }
  }
}