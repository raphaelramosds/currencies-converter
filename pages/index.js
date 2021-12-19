import { useEffect, useState } from 'react';
import Display from '../components/display/Display';
import Conversao from '../components/conversao/Conversao';

export default function Home(props) {

  const temp = props.data;
  const cotacoes = Object.values(temp);

  return (
    <>
      {cotacoes.map((cotacao) => 
        <Display venda={cotacao.ask} nome={cotacao.name}/>
      )}
      <Conversao moedas={cotacoes}/>
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