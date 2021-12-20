import Head from 'next/head';
import { useEffect, useState } from 'react';

import Display from '../components/display/Display';
import Conversao from '../components/conversao/Conversao';



export default function Home(props) {

  const temp = props.data;
  const cotacoes = Object.values(temp);

  return (
    <>
      <Head>
        <title>Cotações de hoje</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='container'>
        <div className='box cotacoes'>
          {cotacoes.map((cotacao) =>
            <Display key={cotacao.name} venda={cotacao.ask} nome={cotacao.name} code={cotacao.code} />
          )}
        </div>

        <div className='box conversao'>
          <Conversao moedas={cotacoes} />
        </div>
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