import { useEffect, useState } from "react";
import Style from './Conversao.module.css';

export default function Conversao(props) {

    const [codigo, setCodigo] = useState('USD');
    const [valorReal, setValorReal] = useState(0);
    const [valorConvertido, setValorConvertido] = useState(0);

    // renderize toda vez que o usuário digita o valor em real
    useEffect(() => {
        handleChangeConvert();
    }, [valorReal, codigo])

    function handleChangeConvert() {

        // filtrar props pelo codigo da moeda selecionada
        const moedaFiltrada = props.moedas.filter( (moeda) => {
            return moeda.code === codigo
        });

        // aplicar conversão 
        setValorConvertido( (valorReal/parseFloat(moedaFiltrada[0].ask)).toFixed(2))
    }

    return (
        <div className="conversao">
            <div className={Style.formConversao}>
                <form onChange={handleChangeConvert}>
                    <input
                        className={Style.input} 
                        type='number' 
                        placeholder="R$"
                        onChange={({target})=>{
                            setValorReal(parseFloat(target.value))
                        }}
                    />

                    <select 
                        className={Style.select}
                        onChange={({target}) => {
                        setCodigo(target.value)
                    }}>
                        <option value='USD'>Dólar</option>
                        <option value='EUR'>Euro</option>
                    </select>
                </form>
            </div>
            <div className={Style.displayValorConvertido}>
                <span> {!valorConvertido ? 0 : valorConvertido } {codigo}</span>
            </div>
        </div>
    );
}