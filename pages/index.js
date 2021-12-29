import Head from 'next/head';
import { useEffect, useState } from 'react';

import Display from '../components/display/Display';
import Conversion from '../components/conversion/Conversion';


export default function Home(props) {
  const temp = props.data;
  const currencies = Object.values(temp);

  return (
    <>
      <Head>
        <title>Cotações de hoje</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='container'>
        <div className="box currencies">
          {currencies.map((currency, index) =>
            <Display key={currency.name}
              sell={currency.ask}
              name={currency.name}
              code={currency.code}
              iconIndex={index} />)}
        </div>
        <div className="box conversion">
          <Conversion currencies={currencies} />
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