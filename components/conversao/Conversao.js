import { useEffect, useState } from "react";

export default function Conversao(props) {

    const [cotacao, setCotacao] = useState({
        valor: 0, // valor digitado
        codigo: 'USD' // moeda que quer converter
    });

    const [valorConvertido, setValorConvertido] = useState(0);

    function converter() {
        const valorReal = document.getElementsByClassName('valorReal')[0].value;
        const codigoMoeda = document.getElementsByClassName('codigoMoedas')[0].value;

        console.log(valorReal)
        // evitar valores vazios
        if (!valorReal) {
            cotacao.valor = 0
        };

        // atualizar estado
        setCotacao({
            valor: valorReal,
            codigo: codigoMoeda
        });

        console.log(`Valor do estado ${cotacao.valor}`)

        // filtrar props pelo codigo da moeda selecionada
        const cotacaoFiltrada = props.moedas.filter( (moeda) => {
            return moeda.code === cotacao.codigo
        });

        // aplicar conversão 
        setValorConvertido( parseFloat(cotacao.valor)/parseFloat(cotacaoFiltrada[0].ask))
    }

    return (
        <div className="conversao">
            <div className="formConversao">
                <form onChange={converter}>
                    <input className='valorReal' placeholder="Valor em Real"/>
                    <select className='codigoMoedas'>
                        <option value='USD'>Dólar</option>
                        <option value='EUR'>Euro</option>
                    </select>
                </form>
            </div>
            <div className="valorConvertido">
                <span> {!valorConvertido ? 0 : valorConvertido } {cotacao.codigo}</span>
            </div>
        </div>
    );
}